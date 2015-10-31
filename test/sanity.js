var test = require('tape')
var Animate = require('../lib/index').Animate
var AnimatedComponent = require('../lib/index').AnimatedComponent
var Eases = require('../lib/index').Eases

test('it should be there', function(t) {
  t.plan(5)
  t.equals(typeof Animate, 'function' )
  t.equals(typeof AnimatedComponent, 'function' )
  t.equals( typeof Eases, 'object')

  var cmp = new AnimatedComponent();
  console.log( "FOO" )
  console.log( cmp )
  t.equals( typeof cmp, 'object' )
  t.deepEquals( Object.keys(cmp), [ 'props', 'context', 'refs', 'updater', 'animator', 'setAnimate', 'stopAnimate' ] )

})
