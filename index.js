'use strict'

module.exports = function castArray (value) {
  return Array.isArray(value) ? value : [value]
}
