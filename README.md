# @seantrane/monorepo

> A monorepo starter kit.

---

[![Build Status](https://travis-ci.com/seantrane/monorepo.svg?branch=master)](https://travis-ci.com/seantrane/monorepo) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![Code Coverage](https://sonarcloud.io/api/project_badges/measure?project=seantrane%3Amonorepo&metric=coverage)](https://sonarcloud.io/component_measures?id=seantrane%3Amonorepo&metric=coverage) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=seantrane%3Amonorepo&metric=security_rating)](https://sonarcloud.io/component_measures?id=seantrane%3Amonorepo&metric=security_rating) [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=seantrane%3Amonorepo&metric=reliability_rating)](https://sonarcloud.io/component_measures?id=seantrane%3Amonorepo&metric=reliability_rating) [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=seantrane%3Amonorepo&metric=sqale_rating)](https://sonarcloud.io/component_measures?id=seantrane%3Amonorepo&metric=sqale_rating)

## Table of Contents

- [About the Repository](#about)
- [Install](#install)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

---

## About the Repository <a id="about"></a>

This is a monorepo for the management of many packages. There are a few dependencies that make this possible;

- [lerna](https://lernajs.io/): a tool for managing *JavaScript* projects with multiple packages.
- [semantic-release-monorepo](https://github.com/Updater/semantic-release-monorepo): use [semantic-release](https://github.com/semantic-release/semantic-release) within a monorepo.

Read [CONTRIBUTING.md](https://github.com/seantrane/monorepo/blob/master/CONTRIBUTING.md) documentation for more details.

## Install <a id="install"></a>

```sh
# Install lerna globally (to use lerna binary at command line)
npm install -g lerna
# Install repo dependencies, link local packages together and install remaining package dependencies
npm install
```

## Usage <a id="usage"></a>

### CLI

```sh
# List local packages
npm run list
# Run tests across all packages
npm test
# Run linting, tests and builds across all packages
npm run ci
# Clean all auto-generated files
npm run clean
# Uninstall all packages
npm run uninstall
```

Read [CONTRIBUTING.md](https://github.com/seantrane/monorepo/blob/master/CONTRIBUTING.md) documentation for more details.

---

## Support <a id="support"></a>

Submit an [issue](https://github.com/seantrane/monorepo/issues/new), in which you should provide as much detail as necessary for your issue.

## Contributing <a id="contributing"></a>

Contributions are always appreciated. Read [CONTRIBUTING.md](https://github.com/seantrane/monorepo/blob/master/CONTRIBUTING.md) documentation to learn more.

## Changelog <a id="changelog"></a>

Release details are documented in the CHANGELOG.md file of each package, and on the [GitHub Releases page](https://github.com/seantrane/monorepo/releases).

---

## License <a id="license"></a>

[ISC License](https://github.com/seantrane/monorepo/blob/master/LICENSE)

Copyright (c) 2018, [Sean Trane Sciarrone](https://github.com/seantrane)
