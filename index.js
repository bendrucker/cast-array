'use strict'

module.exports = function castArray (value) {
  return value.constructor === Array ? value : [value]
}
