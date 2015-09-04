'use strict'

var test = require('tape')
var array = require('./')

test(function (t) {
  t.deepEqual(array([1]), [1])
  t.deepEqual(array(1), [1])
  t.end()
})
