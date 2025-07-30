#!/usr/bin/env bash
set +x

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="${SCRIPT_DIR}"
NX_ROOT=${PROJECT_ROOT}/src

# Check and start nx daemon if needed
cd "${NX_ROOT}" || exit

echo "Checking nx daemon status..."
DAEMON_STATUS=$(pnpx nx daemon --status 2>&1)

if echo "$DAEMON_STATUS" | grep -q "Nx Daemon is not running"; then
  echo "Nx Daemon is not running. Starting daemon..."
  pnpx nx daemon --start
  echo "Nx Daemon started successfully."
else
  echo "Nx Daemon is already running."
fi

# Run the serve command
pnpx nx run-many --target=serve --all --parallel --maxParallel=4
