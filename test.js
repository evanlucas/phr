'use strict'

const test = require('tap').test
const phr = require('./')

test('phr', function(t) {

  var h = [ 0, 38013462 ]
  var out = phr(h)
  t.equal(out, '38.0')

  var out = phr(h, 0, 3)
  t.equal(out, '38.013')


  var out = phr(h, 1e5, 3)
  t.equal(out, '380.135')
  t.end()
})
