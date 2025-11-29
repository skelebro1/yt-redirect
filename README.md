# A simple Brave browser scriptlet + filter rule that automatically redirects the YouTube homepage to the Subscriptions feed.

## Features
- Redirects **only** when visiting the root YouTube URL:
  - `https://youtube.com`
  - `https://youtube.com/`
  - `https://www.youtube.com`
  - `https://www.youtube.com/`
- Does **not** redirect sub-pages:
  - `/watch?v=...`
  - `/@username`
  - `/feed/...`
- Lightweight, no extensions needed

## Installation
1. Enable Scriptlets in Brave (`brave://settings/shields/filters`) and turn on Developer Mode
2. Add new scriptlet named `yt-home-redirect` and paste the code from `scriptlets/yt-home-redirect.js`
3. Add the filter rule from `filters/yt-filter-rule.txt`
