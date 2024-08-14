# Macro Deck Web Client for Macro Deck 2

<img height="64px" src="https://macrodeck.org/images/works_with_macrodeck2.png" />

# Compatible devices

The Macro Deck Web Client is compatible with almost all browsers that support the newest JavaScript features.

# Third party licenses

This app uses some awesome 3rd party libraries:

- [URLSearchParams Polyfill (MIT license)](https://github.com/jerrybendy/url-search-params-polyfill)
- [Bootstrap (MIT license)](https://github.com/twbs/bootstrap)
- [NoSleep.js (MIT license)](https://github.com/richtr/NoSleep.js/)
- [iGrowl.js (MIT license)](https://catc.github.io/iGrowl/)
- [iosOverlay.js (MIT license)](https://taitems.github.io/iOS-Overlay/)

# Docker Images

- docker build -t macro_deck/web-image:1.0 .
- docker run -d -p 8000:80 macro_deck/web-image:1.0
- docker compose up -d
