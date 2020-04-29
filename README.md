# DigitalOcean JS

[![Build Status](https://travis-ci.org/bjorntheart/js-lxd-api.svg?branch=master)](https://travis-ci.org/bjorntheart/js-lxd-api) [![npm](https://img.shields.io/npm/dm/js-lxd-api.svg)](https://www.npmjs.com/package/js-lxd-api) [![npm](https://img.shields.io/npm/dt/js-lxd-api.svg)](https://www.npmjs.com/package/js-lxd-api) [![npm](https://img.shields.io/npm/v/js-lxd-api.svg)](https://www.npmjs.com/package/js-lxd-api)

JavaScript library for the LXD API. For use in Node or the browser.

## Goals

This library was built with a few goals in mind:

- Be able to use in a Node or Browser environment with no difference in usage.
- Use Promises instead of callbacks so clients can make use of `async`/`await`.
- Be built in TypeScript so consumers of the library can benefit from excellent intellisense with the TypeScript definitions.
- Provide solid documentation including examples for usage.

## Usage

To use the library, install from the npm repository.

```shell
$ npm install --save js-lxd-api
# Alternatively install with yarn
$ yarn add ls-lxd-api
```

Simply import the client and initialize it with your API token:

```js
import { Lxd } from 'js-lxd-api';

const client = new Client('my-api-token');
```

To see all the services available, check out the [documentation](https://bjorntheart.github.io/js-lxd-api/).