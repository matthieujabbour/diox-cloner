# diox-cloner

JavaScript Arrays and Objects deep cloner for [diox](https://github.com/matthieujabbour/diox) (but not only).

[![Build Status](https://travis-ci.org/matthieujabbour/diox-cloner.svg?branch=master)](https://travis-ci.org/matthieujabbour/diox-cloner)
[![Coverage Status](https://coveralls.io/repos/github/matthieujabbour/diox-cloner/badge.svg)](https://coveralls.io/github/matthieujabbour/diox-cloner)
[![npm version](https://badge.fury.io/js/diox-cloner.svg)](https://badge.fury.io/js/diox-cloner)
[![Downloads](https://img.shields.io/npm/dm/diox-cloner.svg)](https://www.npmjs.com/package/diox-cloner)


## Installation

```bash
yarn add diox-cloner
```


## Usage

```typescript
// main.js
// --------------------------

import { deepMerge, deepCopy } from 'diox-cloner';

const objectA = {
  propA: {
    propAA: 'test',
  },
  propB: ['test'],
  propC: 'test',
};

const objectB = {
  propA: {
    propAB: 'test',
  },
  propB: ['testB'],
  propC: 'testB',
};

const objectACopy = deepCopy(objectA);
console.log(objectA === objectACopy, objectA.propA === objectACopy.propA); // false, false

const mergedObject = deepMerge(objectA, objectB);
console.log(mergedObject); // { propA: { propAA: 'test', propAB: 'test' }, propB: ['test, 'testB'], propC: 'testB' }
```


## API documentation

You can find the full API documentation [here](https://matthieujabbour.github.io/diox-cloner)


## Contributing

See the [Contribution guide](https://github.com/matthieujabbour/diox-cloner/blob/master/CONTRIBUTING.md)


## License

[MIT](https://github.com/matthieujabbour/diox-cloner/blob/master/LICENSE)

Copyright (c) Matthieu Jabbour.
