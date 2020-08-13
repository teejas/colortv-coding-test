# Unsplash React Native Client

## Download APK (doesn't require any configuration)

Download the Android build [here](https://expo.io/artifacts/ce058a9e-4433-4fc6-abae-c2c9ca5ca718).

## Project Structure

Personally written code is stored in the `src/` folder and `App.js`.
Class components are in `src/components`.
Functional components are in `src/views`.
Utils/helper functions are in `src/utils`.

The app has 2 screens: Search and User:
- Search screen allows you to pass a query to the Unsplash API to get a list of users
  - Click on a user to go to the User screen
- User screen shows a selected users username, profile image, and a gallery of their photos

## Configuration Requirements

Note: MUST BE DONE BEFORE BUILDING/TESTING

Update `src/secrets.js` with your Access Key and Secret Key form the Unsplash API.

## Testing

On a machine with `expo-cli` installed:
- Clone the git repo
- Step into the repo folder
- Run `expo start` to either test on a phone with the Expo Client app, or on a simulator

## Building

On a machine with `expo-cli` installed:
- Clone the git repo
- Step into the repo folder
- run `expo build:{PLATFORM}` where `PLATFORM` is one of 'android', 'ios', or 'web'
