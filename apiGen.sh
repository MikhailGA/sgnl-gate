#!/usr/bin/env bash
set +x

PROJECT_ROOT=$(pwd)
SWAGGER_ROOT=${PROJECT_ROOT}/tools/swagger-codegen
#SWAGGER_ROOT=${PROJECT_ROOT}/tools/swagger-typescript-api

. "${SWAGGER_ROOT}"/tool.sh


GENERATE "http://localhost:3001/swagger-json" "${PROJECT_ROOT}/src/apps/client/src/shared/api/generated"
