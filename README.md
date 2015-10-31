# react-set-animate

![circleci](https://circleci.com/gh/petermoresi/react-set-animate.svg?style=shield&circle-token=:circle-token)

Based on the excellent project https://github.com/tejitak/react-state-animation

react-set-animate provides a [Promise](https://promisesaplus.com/) based API to animate [React](https://facebook.github.io/react/) Component's with the power of D3's [timer](https://github.com/d3/d3-timer), [ease](https://github.com/d3/d3-ease) and [interpolation](https://github.com/d3/d3-interpolate) routines.

This works with [React](http://facebook.github.io/react/) v0.14.
It is planned to work with [React Canvas](https://github.com/Flipboard/react-canvas) when it adds support for 0.14.

## Installation
```
npm install react-set-animate -save
```

### ES6 Import

```
import {Animate, AnimatedComponent} from 'react-set-animate'
```

### ES5 require

ES5 code is transpiled to a CommonJS format that is ready for webpack or browserify.

```
var Animate = require('react-set-animate').Animate;
```

## Support Transitions

The routines are provided by [d3-ease](https://github.com/d3/d3-ease). Please see that project for more information.

- linear-in
- linear-out
- linear-in-out
- quad-in
- quad-out
- quad-in-out
- cubic-in
- cubic-out
- cubic-in-out
- poly-in
- poly-out
- poly-in-out
- sin-in
- sin-out
- sin-in-out
- exp-in
- exp-out
- exp-in-out
- circle-in
- circle-out
- circle-in-out
- bounce-in
- bounce-out
- bounce-in-out
- back-in
- back-out
- back-in-out
- elastic-in
- elastic-out
- elastic-in-out

## Core API

### Animate

The Animate class has a tween method. This accepts 4 arguments: property name, final value, duration, easing. The property name is the name of a value in your React component. If the value is not in the state object then the value will be assigned as a property and the forceUpdate method will be called on your React component.

When tween is started the value of the property will be read from your React component. This value along with the endStateValue will be passed into d3's interpolate function. This function is very powerful and will interpolate number, strings, dates, colors and more. Please see the documentation for d3-interpolate for more information.

The tween function immediately returns a Promise object. The promise is resolved when the duration has elapsed. For browsers that do not support the Promises you should install a polyfill like [es6-promises](https://github.com/jakearchibald/es6-promise).

The timing of the tween is handled by [d3's timer](https://github.com/d3/d3-timer) routine.

#### Methods

  - tween( stateProp, endStateValue, duration, ease )

### AnimatedComponent

The AnimatedComponent class extends React.Component adding the setAnimate method. The AnimatedComponent create an instance of the Animate class and methods to interact with the root of all evil (state changing over time).

  - setAnimate( stateProp, endStateValue, duration, ease )
  - stopAnimate()


All of these functions return a process that is resolved when the transition is complete.

## Usage

### Example 1. Extend AnimatedComponent

```js:extend.js
import {React} from 'react'
import {AnimatedComponent} from 'react-set-animate'

class MyAnimatedComponent extends AnimatedComponent {
  constructor() {

    this.state = { x: 0 }

    // animate this.state.x over 2 secs with final value of 1000
    // with the default ease (linear-in-out).
    this.setAnimate( 'x', 1000, 2000 )

    // animte this.state.x over 500ms with a final value of 0
    this.setAnimate( 'x', 0, 500, 'bounce-in-out' )
    this.setAnimate( 'x', 0, 500, 'quad-in-out' )
  }
}
```

### Example 2. Use outside of component

```js:app.js
var yourComponent = React.render(
    <YourComponent />,
    document.getElementById('demo')
)

var animate = new Animate(yourComponent)
// your component's state 'x' will be updated to 350 with linear order in 1 sec, then alpha will be 0 on end of moving
animate.tween('x', 350/*end value*/, 1000/*duration(ms)*/).then(() => animate.tween('alpha', 0, 400))
```

## Development

1. Run `npm install`
2. Build CommonJS `gulp lib`
3. Run test `npm test`
