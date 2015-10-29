var test = require('tape')
var Animate = require('../build/index').Animate
var AnimatedComponent = require('../build/index').AnimatedComponent

test('it should be there', function(t) {
  t.plan(2)
  t.equals(typeof Animate, 'function' )
  t.equals(typeof AnimatedComponent, 'function' )

})
