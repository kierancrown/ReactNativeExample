# React Native Example

## What I did 🪄

When deciding what app to create to demonstrate my abilities within React Native I decided to opt for a small scope project so I settled on a News app. It's extremely basic in functionality.

It pulls in data from News API (For articles) and DarkSky (for weather) and displays it in a very basic feed format. There is nothing fancy about the way in which this app works but that is by design.

It supports both light and dark mode and works on both iOS and Android. It has been built using Typescript and React Native CLI.

## Challenges I encountered 🏁

My main issue with creating this app was actually setting up the development environment on Apple Silicon. However after crawling through many StackOverflow posts and documentation I managed to get the CLI up and running.

As this is my first time developing in React Native for a couple of months it did take me a little while to switch from React to React Native.

## Dev Environment 👨‍💻

- Apple Silicon (MBP 16" M1 Pro)
- VS Code
- Xcode
- Android Studio
- iTerm

## Technology Choices 👌

### Typescript

I decided to write this app using Typescript. I use Typescript everywhere I can, I find it speeds up my development process and makes my life as a JS developer much easier. I have added type annotations as much as I can.

ps. I love strongly typed languages ❤️

### Expo or React Native CLI

I've always preferred working in React Native CLI rather than expo. Even though expo exposes all kinds of useful development tools and prebuilt components I've always found it more gratifying using the CLI.

### Navigation / Router

For this project I decided to use React Navigation instead of the Wix React Native Navigation. I've always used React Navigation so it was easier for me to get up and running with the library. React Navigation seems to also have better performance on the face of things.

### Networking

I chose axios to make network requests. There isn't any technical reason I chose this library just a personal preference.

## What I would of done next 👀

Due to time constraints there are a few things and of polish that I could not get ready in time. Some of the bigger ones include

- Setup onboarding process

  Ask for their name and location permission

- Tidy up and refactoring of code

  There are some inconsistencies in and around my code, things like variables names slightly different across files

- Animations

  Currently there are no fancy animations which makes the app feel pretty unpolished

- Accessability

  The app is also missing accessability features such as supporting screen readers or high constrast mode

- Missing/Broken UI

  The weather icons for example are currently missing (being represented by a circle)

  The acitivity loader isn't center on the WebView

- More tests

  I only had time to put in a few snapshot tests (very last minute admittedly)

  I would have liked to have written some intergration and components test

## Testing ✅

I decided to use Jest for writing unit tests. I didn't get as much time as I'd have hoped to write testing as it was very last minute!

I did test this app using emulators (Both Android and iOS) and also tested on Pyhsical devices (iPhone 13 Pro Max, Google Pixel 6 Pro). Landscape doesn't work very well however due to lack of optimisation.

### Know issues/bugs 🚩

- Activity indicator off center on article view screen
- Weather icons currently not implemented
- No skeleton or indication of empty state
- No handling of offline/caching

## Thanks To 👍️

Stackoverflow, Reddit, and Google 😀
