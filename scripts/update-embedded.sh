#!/bin/sh
# Refresh the embedded recording snapshot from the `data` branch (read only) and rebuild.
set -e
git fetch origin data
git show FETCH_HEAD:recording.jsonl > data/recording-embedded.jsonl
node scripts/build.mjs
