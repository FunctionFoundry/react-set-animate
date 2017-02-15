var test = require('tape');
var Animate = require('../lib/index').Animate;
var AnimateMixin = require('../lib/index').AnimateMixin;
var AnimatedComponent = require('../lib/index').AnimatedComponent;
var eases = require('../lib/index').eases;

test('it should be there', function(t) {
  t.plan(10);

  t.equals( typeof Animate, 'function' );
  t.equals( typeof AnimatedComponent, 'function' );
  t.equals( typeof AnimateMixin, 'object' );
  t.equals( typeof eases, 'object');

  var cmp = new AnimatedComponent();
  var mockCmp = {
    state: { x: 0 },
    setState: function(props) {
      this.state = Object.assign( this.state, props )
    }
  };

  var animate = new Animate(mockCmp);
  t.equals( typeof animate, 'object' );
  t.equals( typeof animate.tween, 'function' );

  t.equals( typeof cmp, 'object' );
  t.deepEquals( Object.keys(cmp),
  [ 'props', 'context', 'refs', 'updater', 'animator', 'setAnimate', 'stopAnimate' ] );

  animate.tween('x', 100, 10);

  // check in 20 seconds to see if final value is realized!
  setTimeout( function() {
    t.equals( typeof mockCmp.state, 'object');
    t.equals( mockCmp.state.x, 100);
  }, 20);

});
