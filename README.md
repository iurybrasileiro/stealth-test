# Stealth Test

## What I use in this project

I created a structure that I usually use in the projects I do and some libs that we use too.

Installed libs

* @react-native-firebase/firestore
* @reduxjs/toolkit
* react-native-iphone-x-helper
* react-native-reanimated
* react-native-vector-icons
* styled-components

Developemt dependencies
> This libraries is awesome to help to run scripts based on git commands. I defined to run eslint and prevent to send malformed codes

* Husky
* Lint-staged

## Get the project to your machine and run it

### Clone project

```bash
  git clone git@github.com:iurybrasileiro/stealth-test.git
```

### Access project folder
> if you didn't change the folder name

```bash
  cd stealth-test
```

### Install dependencies

```bash
  yarn
```

### Install  Cocoapods dependencies

```bash
  cd ios; pod install; cd ..;
```

### Start the bundle

```bash
  yarn start
```

### Install in the IOS simulator

```bash
  yarn ios
```

### Install in the ANDROID simulator

```bash
  yarn android
```
