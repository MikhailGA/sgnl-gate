#!/usr/bin/env bash

# templates
# https://github.com/swagger-api/swagger-codegen/tree/master/modules/swagger-codegen/src/main/resources/typescript-fetch
# cli samples
# https://github.com/swagger-api/swagger-codegen/blob/master/bin/typescript-node-petstore.sh


trap 'echo "Exit"; exit 1' INT

function error (){
  echo "ERROR" && echo "$1" && echo 'Exit.' && exit 1
}


if [ ! -n "$(which java)" ]
then
    error "Install JRE!"
fi

if [ -z "$PROJECT_ROOT" ]
then
    error "PROJECT_ROOT VAR is not set"
fi

if [ -z "$SWAGGER_ROOT" ]
then
    error "SWAGGER_ROOT VAR is not set"
fi

TOOL_VERSION=7.6.0
TOOL_TYPE=openapi-generator-cli.jar

TOOL_PATH="${SWAGGER_ROOT}/.bin/${TOOL_VERSION}"
TOOL_BIN="${TOOL_PATH}/${TOOL_TYPE}"


if [ ! -f "$TOOL_BIN" ]
then
    echo "Install tooling..."
    mkdir -p "$TOOL_PATH" || error "creating path $TOOL_PATH"
    (cd "$TOOL_PATH" \
        && wget -O ${TOOL_TYPE} \
        "https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/${TOOL_VERSION}/openapi-generator-cli-${TOOL_VERSION}.jar"

    )
fi


function GENERATE() {
    ENDPOINT=$1
    TARGET=$2

    if [ -z "$ENDPOINT" ]
    then
        error "ENDPOINT ARG (first) is not set"
    fi

    if [ -z "$TARGET" ]
    then
        error "TARGET ARG (second) is not set"
    fi

    # rm -rf $TARGET
    # mkdir -p $TARGET

    IGNORE=$TARGET/.swagger-codegen-ignore
    echo 'index.ts' > "$IGNORE"
    echo 'git_push.sh' >> "$IGNORE"
    echo 'custom.d.ts' >> "$IGNORE"
    echo 'api_test.spec.ts' >> "$IGNORE"
    echo '.gitignore' >> "$IGNORE"
    echo '.swagger-codegen' >> "$IGNORE"

    # Download the swagger spec using curl with SSL bypass
    TEMP_SPEC_FILE="/tmp/swagger-spec-$(date +%s).json"
    echo "Downloading swagger spec from $ENDPOINT..."
    curl -k -L -o "$TEMP_SPEC_FILE" "$ENDPOINT" || error "Failed to download swagger spec"

    # Use the downloaded file as input
    java -jar "${TOOL_BIN}" \
        generate \
        --input-spec "$TEMP_SPEC_FILE" \
        --generator-name typescript-axios \
        --additional-properties supportsES6=true \
        --type-mappings DateTime=Date \
        --engine "mustache" \
        --skip-validate-spec \
        --output "$TARGET"
    
    # Clean up
    rm -f "$TEMP_SPEC_FILE"
    rm "$IGNORE"
    rm -rf "$TARGET"/.swagger-codegen
}
