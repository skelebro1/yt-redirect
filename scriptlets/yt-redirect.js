// Redirect only if the YouTube URL is the root
if (location.pathname === "/" || location.pathname === "") {
  location.replace("https://www.youtube.com/feed/subscriptions");
}
