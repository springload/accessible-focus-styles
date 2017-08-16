# [accessible-focus-styles](https://springload.github.io/accessible-focus-styles/) [![npm](https://img.shields.io/npm/v/accessible-focus-styles.svg?style=flat-square)](https://www.npmjs.com/package/accessible-focus-styles) [![Build Status](https://travis-ci.org/springload/accessible-focus-styles.svg?branch=master)](https://travis-ci.org/springload/accessible-focus-styles) [![Coverage Status](https://coveralls.io/repos/github/springload/accessible-focus-styles/badge.svg)](https://coveralls.io/github/springload/accessible-focus-styles)

> Control focus styles in an accessible manner - remove outlines for clicks, keep them for keyboard navigation Check out our [online demo](https://springload.github.io/accessible-focus-styles/)!

## Usage

```sh
npm install --save accessible-focus-styles
```

### Initial setup

Is really simple.

```js
import initAccessibleFocus from 'accessible-focus-styles';

initAccessibleFocus();
```

## Development

### Install

> Clone the project on your computer, and install [Node](https://nodejs.org). This project also uses [nvm](https://github.com/creationix/nvm).

```sh
nvm install
# Then, install all project dependencies.
npm install
```


### Releases

- Make a new branch for the release of the new version.
- Update the [CHANGELOG](CHANGELOG.md).
- Update the version number in `package.json`, following semver.
- Make a PR and squash merge it.
- Back on master with the PR merged, follow the instructions below.

```sh
npm run dist
# Use irish-pub to check the package content. Install w/ npm install -g first.
irish-pub
npm publish
```

- Finally, go to GitHub and create a release and a tag for the new version.
- Done!
