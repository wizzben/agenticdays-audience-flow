#!/usr/bin/env python3
"""Polls the public room status of agenticdays.com every 30 s and appends
one compact JSON line per poll to recording.jsonl in the `data` branch
worktree. Commits and pushes every PUSH_EVERY polls so the static app can
read the recording from raw.githubusercontent.com (which sends CORS *).

Usage: python3 recorder/record.py <path-to-data-branch-worktree> [end-time-as-epoch-seconds]
Stdlib only. Stops by itself at the end time (default: 17:00 Europe/Zurich on 20 Nov 2026, after the last
session), on Ctrl-C, or when a file named STOP appears in the worktree. Pushes the remaining samples on exit.
"""
import json, os, subprocess, sys, time, urllib.request

URL = "https://www.agenticdays.com/api/rooms.json"
INTERVAL = 30
PUSH_EVERY = 4  # polls -> every 2 minutes
END_DEFAULT = 1795190400  # 2026-11-20 17:00 Europe/Zurich: the event is over, stop polling

def poll():
    req = urllib.request.Request(URL, headers={"User-Agent": "audience-flow-recorder", "Cache-Control": "no-store"})
    with urllib.request.urlopen(req, timeout=15) as r:
        d = json.load(r)
    return {"t": d.get("now") or int(time.time() * 1000),
            "rooms": {x["id"]: {"level": x.get("level"), "label": x.get("label"), "target": x.get("target")}
                      for x in d.get("rooms", [])}}

def git(wt, *a):
    return subprocess.run(["git", "-C", wt, *a], capture_output=True, text=True)

def push(wt):
    git(wt, "add", "recording.jsonl")
    git(wt, "commit", "-q", "-m", "recording: update")
    p = git(wt, "push", "-q", "origin", "data")
    if p.returncode:
        print("push failed:", p.stderr.strip()[:200], flush=True)

def main():
    wt = sys.argv[1]
    end = float(sys.argv[2]) if len(sys.argv) > 2 else END_DEFAULT
    out = os.path.join(wt, "recording.jsonl")
    n = 0
    while not os.path.exists(os.path.join(wt, "STOP")) and time.time() < end:
        start = time.time()
        try:
            line = json.dumps(poll(), separators=(",", ":"))
            with open(out, "a") as f:
                f.write(line + "\n")
            n += 1
            print(time.strftime("%H:%M:%S"), line[:160], flush=True)
        except Exception as e:  # keep going on network hiccups
            print(time.strftime("%H:%M:%S"), "poll failed:", e, flush=True)
        if n and n % PUSH_EVERY == 0:
            push(wt)
        time.sleep(max(1, INTERVAL - (time.time() - start)))
    push(wt)
    print(time.strftime("%H:%M:%S"), "recorder stopped", flush=True)

if __name__ == "__main__":
    main()
