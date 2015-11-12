'use strict'

module.exports = function(t, iter, p) {
  if (typeof p === 'undefined')
    p = 1

  iter = iter || 1e6
  return ((t[0] * 1e9 + t[1]) / iter).toFixed(p)
}
