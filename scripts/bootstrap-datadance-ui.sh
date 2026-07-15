#!/usr/bin/env bash
set -euo pipefail

PACKAGE_SPEC="github:zaxison/datadance-ui#v0.2.1"

if [[ ! -f package.json ]]; then
  echo "DataDance bootstrap failed: run this script from the target project root (package.json is missing)." >&2
  exit 1
fi

node -e '
  const pkg = require("./package.json");
  const deps = { ...pkg.dependencies, ...pkg.devDependencies, ...pkg.peerDependencies };
  if (!deps.react || !deps["react-dom"]) {
    console.error("DataDance bootstrap failed: the first supported target is a React project with react and react-dom.");
    process.exit(1);
  }
'

echo "Installing @datadance/ui from ${PACKAGE_SPEC}..."
npm install "${PACKAGE_SPEC}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
node "${SCRIPT_DIR}/verify-datadance-ui.mjs"

