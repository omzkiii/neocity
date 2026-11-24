#!/usr/bin/env bash
set -o pipefail

if ! find city/_blogs -maxdepth 1 -type f -name '*.html' -exec basename {} \; \
  | LC_ALL=C sort \
  | jq -R -s 'split("\n") | map(select(length > 0))' > city/_blogs/index.json; then
  echo "failed to generate city/_blogs/index.json" >&2
  exit 1
fi

find city -type f -print0 | while IFS= read -r -d '' f; do
  curl -u "omzki:$1" -F "${f#city/}=@${f#/}" "https://neocities.org/api/upload"
done
