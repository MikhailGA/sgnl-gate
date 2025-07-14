#!/usr/bin/env bash
trap 'echo "Exit"; exit 1' INT
ROOT=$(pwd)
CURRENT_HASH=$(git rev-parse HEAD)
HASH_FILE=.restore-hash
OLD_HASH=$(cat $HASH_FILE 2>/dev/null)

if [ "$OLD_HASH" == "$CURRENT_HASH" ]; then
    echo "Skip restore"
else
    echo "Run restore $CURRENT_HASH != $OLD_HASH"

    npm ci &

    cd "$ROOT"/server || exit
    npm ci &

    cd "$ROOT"/app || exit
    npm ci &

    #https://stackoverflow.com/a/36038185
    wait

    echo "$CURRENT_HASH" > "$ROOT"/$HASH_FILE
    echo "Write hash file"
fi
