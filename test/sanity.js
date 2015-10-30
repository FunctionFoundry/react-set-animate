var test = require('tape')
var Animate = require('../lib/index').Animate
var AnimatedComponent = require('../lib/index').AnimatedComponent
var Eases = require('../lib/index').Eases

test('it should be there', function(t) {
  t.plan(3)
  t.equals(typeof Animate, 'function' )
  t.equals(typeof AnimatedComponent, 'function' )
  t.equals( typeof Eases, 'object')

})
