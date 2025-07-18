#!/usr/bin/env bash
set +x

PROJECT_ROOT=$(pwd)
NX_ROOT=${PROJECT_ROOT}/src

cd "${NX_ROOT}" && \
  npx nx run-many --target=serve --all --parallel --maxParallel=4npm