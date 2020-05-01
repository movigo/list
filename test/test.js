const tape = require('tape')
const { JSDOM } = require('jsdom')
const movigo = require('@movigo/core')

require('../dist/movigo-list')

;(async function IIFE () {
  global.window = (await JSDOM.fromFile('index.html')).window

  tape('Library should return a list of available action functions', function (test) {
    const target = movigo.target('div')

    test.equal(typeof target.list, 'function')

    test.end()
  })
})()