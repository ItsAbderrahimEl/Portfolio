#!/usr/bin/bash

# Source custom shell functions from the local bash_functions file
[ -f ./bash_functions ] && source ./bash_functions

# Compile and bundle frontend assets into the dist/ directory
npm run build

# Convert any new PDF certificates to PNG images and save them in public/certificates/
# Skips certificates that have already been converted
sync_certificates '/root/Documents/Me/Certificates' './public/certificates'

# Stage all changes, commit, and push to the main branch
# shellcheck disable=SC2035
git add  *
git commit -m "My Portfolio"
git push origin main

# Deploy the production build to GitHub Pages by pushing dist/ to the gh-pages branch
git subtree push --prefix dist origin gh-pages