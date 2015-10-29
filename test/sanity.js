var test = require('tape')
var Animate = require('../build/index').Animate
var AnimatedComponent = require('../build/index').AnimatedComponent
var Eases = require('../build/index').Eases

test('it should be there', function(t) {
  t.plan(3)
  t.equals(typeof Animate, 'function' )
  t.equals(typeof AnimatedComponent, 'function' )
  t.equals( typeof Eases, 'object')

})
