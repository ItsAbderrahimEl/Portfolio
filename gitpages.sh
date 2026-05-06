#!/usr/bin/bash

# Source custom shell functions from the local bash_functions file
[ -f ./bash_functions.sh ] && source ./bash_functions.sh

# Convert any new PDF certificates to PNG images and save them in public/certificates/
# Skips certificates that have already been converted
sync_certificates '/root/Documents/Me/Certificates' './public/certificates'

# Exit immediately if sync_certificates failed
if [[ $? -ne 0 ]]; then
  echo "Certificate sync failed. Aborting deployment."
  exit 1
fi

# Copy the last version of the resume into the application

resume_path="$HOME/Documents/Me/CV's/CV - Abderrahim El Ouariachi.pdf"

if [[ -e "$resume_path" ]]; then
    cp "$resume_path" "./public/CV - Abderrahim El Ouariachi.pdf"
else
    printf '\033[31mError: resume not found at %s\033[0m\n' "$resume_path" >&2
    exit 1
fi

# Compile and bundle frontend assets into the dist/ directory
npm run build

# Stage all changes, commit, and push to the main branch
# shellcheck disable=SC2035
git add  *
git commit -m "My Portfolio"
git push origin main

# Deploy the production build to GitHub Pages by pushing dist/ to the gh-pages branch
git subtree push --prefix dist origin gh-pages