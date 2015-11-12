# phr

[![Build Status](https://travis-ci.org/evanlucas/phr.svg)](https://travis-ci.org/evanlucas/phr)
[![Coverage Status](https://coveralls.io/repos/evanlucas/phr/badge.svg?branch=master&service=github)](https://coveralls.io/github/evanlucas/phr?branch=master)

Pretty print ns/op from `process.hrtime()`

## Install

```bash
$ npm install phr
```

## Test

```bash
$ npm test
```

## Usage

```js
const phr = require('phr')
const ITER = 1e6

var h = process.hrtime()
// benchmark ns/op
for (var i = 0; i < ITER; i++) {
  var a = {}
  a.a = 1
  a.b = 2
}

h = process.hrtime(h)
console.log('bench', phr(h, ITER, 1), 'ns/op')
// => bench 30.1 ns/op
```

## API

### PHR(h, ITER, places)

- h pass in process.hrtime
- ITER number of iterations
- places number of places to format

## Author

Evan Lucas

## License

MIT (See `LICENSE` for more info)
