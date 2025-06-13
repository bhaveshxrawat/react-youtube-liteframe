##1.2.2

- Refactored usePreconnect hook, so it doesn't add multiple useEffects per component.

##1.2.1

- Refactor: switched from short-circuit eval to ternary operation eval.
- Fix: preconnecting polluted the `<head>`.
- Made linear gradient exclusive to the YT embeds with title.
- Optimised the layout for YouTube Shorts.

##1.1.1

- Fixed the README.md redundancy.

##1.1.0

- Added optional `videoTitle` prop for better accessibility (sets alt text).
- Added linear gradient for better title visibility and mocking YT embeds
