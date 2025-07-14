#!/usr/bin/env bash

trap 'echo "Exit"; exit 1' INT

./restore.sh

docker compose down
echo "Build start"
docker compose build
echo "$CURRENT_HASH" > "$HASH_FILE"
docker compose up