# A simple Brave browser scriptlet + filter rule that automatically redirects the YouTube homepage to the Subscriptions feed.

## Features
- Redirects **ONLY** when visiting:
  - `https://youtube.com`
  - `https://www.youtube.com`
- Does **NOT** redirect:
  - `/watch?v=...`
  - `/@channels`
  - `/results?...`
  - Anything except the root homepage

## Installation
1. Open **brave://settings/shields/filters**
2. Enable **Developer Mode**
3. Add a new scriptlet named:  
   `yt-redirect`  
   (Brave will automatically store it as `user-yt-redirect`)
4. Paste the scriptlet from `scriptlets/yt-redirect.js`
5. Add the filter rules from `filters/yt-filter.txt`
