#!/usr/bin/env bash

# Convert the pdf certificates into images and save them in /public/certificates
sync_certificates() {
  local pdf_dir="${1:-/root/Documents/Me/Certificates}"
  local img_dir="${2:-./public/certificates}"

  mkdir -p "$img_dir"

  for pdf in "$pdf_dir"/*.pdf; do
    # shellcheck disable=SC2155
    local filename=$(basename "$pdf" .pdf)
    local png="$img_dir/${filename}.png"

    if [[ ! -f "$png" ]]; then
      echo "Converting: $filename.pdf"
      convert -density 300 "$pdf" "$png"

      # shellcheck disable=SC2181
      if [[ $? -eq 0 ]]; then
        echo "  Done: $filename.png"
      else
        echo "  Failed: $filename.pdf"
      fi
    else
      echo "Skipping: $filename.png already exists"
    fi
  done

  echo "Sync complete."
}