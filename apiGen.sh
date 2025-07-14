#!/usr/bin/env bash
set +x

PROJECT_ROOT=$(pwd)
SWAGGER_ROOT=${PROJECT_ROOT}/tools/swagger-codegen
#SWAGGER_ROOT=${PROJECT_ROOT}/tools/swagger-typescript-api

. "${SWAGGER_ROOT}"/tool.sh


GENERATE "https://dev1.cf:3200/swagger-json" "${PROJECT_ROOT}/app/src/shared/api/generated"
