'use strict'

module.exports = function castArray (value) {
  var isArray = Object.prototype.toString.call(value) === '[object Array]'
  return isArray ? value : [value]
}
