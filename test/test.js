const tape = require('tape')
const { JSDOM } = require('jsdom')
const movigo = require('@movigo/core')

require('../dist/movigo-list')

;(async function IIFE () {
  global.window = (await JSDOM.fromFile('index.html')).window

  tape('Plugin should add a list function in Movigo library', function (test) {
    const target = movigo.target('div')

    test.equal(typeof target.list, 'function')

    test.end()
  })
})()