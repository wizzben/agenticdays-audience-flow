#!/usr/bin/env python3
"""Polls the public room status of agenticdays.com every 30 s and appends
one compact JSON line per poll to recording.jsonl in the `data` branch
worktree. Commits and pushes every PUSH_EVERY polls so the static app can
read the recording from raw.githubusercontent.com (which sends CORS *).

Usage: python3 recorder/record.py <path-to-data-branch-worktree>
Stdlib only. Stop with Ctrl-C or by creating a file named STOP in the worktree.
"""
import json, os, subprocess, sys, time, urllib.request

URL = "https://www.agenticdays.com/api/rooms.json"
INTERVAL = 30
PUSH_EVERY = 4  # polls -> every 2 minutes

def poll():
    req = urllib.request.Request(URL, headers={"User-Agent": "audience-flow-recorder", "Cache-Control": "no-store"})
    with urllib.request.urlopen(req, timeout=15) as r:
        d = json.load(r)
    return {"t": d.get("now") or int(time.time() * 1000),
            "rooms": {x["id"]: {"level": x.get("level"), "label": x.get("label"), "target": x.get("target")}
                      for x in d.get("rooms", [])}}

def git(wt, *a):
    return subprocess.run(["git", "-C", wt, *a], capture_output=True, text=True)

def main():
    wt = sys.argv[1]
    out = os.path.join(wt, "recording.jsonl")
    n = 0
    while not os.path.exists(os.path.join(wt, "STOP")):
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
            git(wt, "add", "recording.jsonl")
            git(wt, "commit", "-q", "-m", "recording: update")
            p = git(wt, "push", "-q", "origin", "data")
            if p.returncode:
                print("push failed:", p.stderr.strip()[:200], flush=True)
        time.sleep(max(1, INTERVAL - (time.time() - start)))

if __name__ == "__main__":
    main()
