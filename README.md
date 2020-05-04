# LXD API javascript wrapper

[![Build Status](https://travis-ci.org/bjorntheart/jslxd.svg?branch=master)](https://travis-ci.org/bjorntheart/jslxd) [![npm](https://img.shields.io/npm/dm/jslxd.svg)](https://www.npmjs.com/package/jslxd) [![npm](https://img.shields.io/npm/dt/jslxd.svg)](https://www.npmjs.com/package/jslxd) [![npm](https://img.shields.io/npm/v/jslxd.svg)](https://www.npmjs.com/package/jslxd)

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
$ npm install --save jslxd
# Alternatively install with yarn
$ yarn add lslxd
```

Simply import the client and initialize it with your API token:

```js
import { Client } from 'jslxd';

const client = new Client('my-api-token');
```

To see all the services available, check out the [documentation](https://bjorntheart.github.io/jslxd/).
