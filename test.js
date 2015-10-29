var test = require('tape')
var Animate = require('./lib/ReactSetAnimate').Animate
var AnimatedComponent = require('./lib/ReactSetAnimate').AnimatedComponent

test('it should be there', function(t) {
  t.plan(2)
  t.equals(typeof Animate, 'function' )
  t.equals(typeof AnimatedComponent, 'function' )

})
