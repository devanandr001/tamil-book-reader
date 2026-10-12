# Oli Tamil Book Reader

A Tamil PDF reader with a chapter index, page navigation, Tamil text search, bookmarks, highlights, copy, and editable OCR corrections.

## GitHub Pages

The `main` branch automatically builds and deploys this site with GitHub Actions. After the first successful workflow run, the public URL is `https://devanandr001.github.io/tamil-book-reader/`. The website does not include the supplied 163 MB book PDF because its public distribution rights have not been confirmed. Visitors can upload a PDF they have rights to use. The book cover and chapter index are included.

To run locally, install Node.js 22 or newer, then run `pnpm install` and `pnpm run dev`.

## Android source

The Android Capacitor scaffold is included. Run `pnpm install`, then `pnpm run android:sync` before opening `android/` in Android Studio. The book PDF is not in this repository; include it in a release only after confirming distribution rights.
