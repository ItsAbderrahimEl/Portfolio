#!/usr/bin/zsh

# Build Assets
npm run build

# Deploy everything to main branch
git add *
git commit -m "My Portfolio"
git push origin main

# Deploy the dist directory that contains the build assets to the gh-pages branch
git subtree push --prefix dist origin gh-pages