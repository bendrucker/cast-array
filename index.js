'use strict'

var isArray = Array.isArray

module.exports = function castArray (value) {
  return isArray(value) ? value : [value]
}
