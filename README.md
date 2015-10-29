# react-set-animate

![circleci](https://circleci.com/gh/petermoresi/react-set-animate.svg?style=shield&circle-token=:circle-token)

Based on the excellent project https://github.com/tejitak/react-state-animation

react-set-animate provides a Promise based API for mutating the value of a React component; built with
D3's timer, ease and interpolation routines.

This works with [React](http://facebook.github.io/react/) v0.14.
It is planned to work with [React Canvas](https://github.com/Flipboard/react-canvas) when it adds support for 0.14.

## Installation
```
npm install react-set-animate --save
```

### ES6 Import

This library is compatible with [jsnext:main](https://github.com/rollup/rollup/wiki/jsnext:main).

```
import {Animate, AnimatedComponent} from 'react-set-animate'
```

### ES5 require

CommonJS code compiled to ES5 is available in the lib directory.

```
var Animate = require('react-set-animate').Animate;
```

## API

  - animate( easeName, prop, endStateValue, duration )
  - linearIn(*stateProp*, *endStateValue*, *duration*)
  - linearOut(*stateProp*, *endStateValue*, *duration*)
  - linearInOut(*stateProp*, *endStateValue*, *duration*)
  - quadIn(*stateProp*, *endStateValue*, *duration*)
  - quadOut(*stateProp*, *endStateValue*, *duration*)
  - quadInOut(*stateProp*, *endStateValue*, *duration*)
  - cubicIn(*stateProp*, *endStateValue*, *duration*)
  - cubicOut(*stateProp*, *endStateValue*, *duration*)
  - cubicInOut(*stateProp*, *endStateValue*, *duration*)
  - polyIn(*stateProp*, *endStateValue*, *duration*)
  - polyOut(*stateProp*, *endStateValue*, *duration*)
  - polyInOut(*stateProp*, *endStateValue*, *duration*)
  - sinIn(*stateProp*, *endStateValue*, *duration*)
  - sinOut(*stateProp*, *endStateValue*, *duration*)
  - sinInOut(*stateProp*, *endStateValue*, *duration*)
  - expIn(*stateProp*, *endStateValue*, *duration*)
  - expOut(*stateProp*, *endStateValue*, *duration*)
  - expInOut(*stateProp*, *endStateValue*, *duration*)
  - circleIn(*stateProp*, *endStateValue*, *duration*)
  - circleOut(*stateProp*, *endStateValue*, *duration*)
  - circleInOut(*stateProp*, *endStateValue*, *duration*)
  - bounceIn(*stateProp*, *endStateValue*, *duration*)
  - bounceOut(*stateProp*, *endStateValue*, *duration*)
  - bounceInOut(*stateProp*, *endStateValue*, *duration*)
  - backIn(*stateProp*, *endStateValue*, *duration*)
  - backOut(*stateProp*, *endStateValue*, *duration*)
  - backInOut(*stateProp*, *endStateValue*, *duration*)
  - elasticIn(*stateProp*, *endStateValue*, *duration*)
  - elasticOut(*stateProp*, *endStateValue*, *duration*)
  - elasticInOut(*stateProp*, *endStateValue*, *duration*)

All of these functions return a process that is resolved when the transition is complete.

##Usage

### Example 0. Extend AnimatedComponent

```js:extend.js
import {AnimatedComponent} from 'react-set-animate'

class MyAnimatedComponent extends AnimatedComponent {
  handleClick() {
    // animate this.state.x over 2000ms with final value of 1000
    this.setAnimate('linear-in', 'x', 1000, 2000)
  }
}
```

### Example 1. Use outside of component

```js:app.js
var yourComponent = React.render(
    <YourComponent />,
    document.getElementById('demo')
)
var reactStateAnimation = new ReactStateAnimation(yourComponent)
// your component's state 'x' will be updated to 350 with linear order in 1 sec, then alpha will be 0 on end of moving
reactStateAnimation.linearInOut('x', 350/*end value*/, 1000/*duration(ms)*/).then(() => reactStateAnimation.linearInOut('alpha', 0, 400))
```

### Example 2. Linear Move in React Component

Set any state (e.g. 'x') associated with position left style

```js:Demo.js
import React from 'react'
import {Animate} from 'react-set-animate'

export default class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            x: 0
        }
        // react state animation wrapper
        this._animate = new Animate(this)
    }

    start() {
        // start animation
        this._animate.linearInOut('x', 350/*end value*/, 1000/*duration(ms)*/)
    }

    stop() {
        this._animate.stop()
    }

    getStyle() {
        return {
            position: 'absolute',
            backgroundColor: "#009688",
            top: 0,
            left: this.state.x + "px",
            width: this.props.width,
            height: this.props.height
        }
    }

    render() {
        return (
            <div style={this.getStyle()}></div>
        )
    }
}

Demo.defaultProps = {
    width: 50,
    height: 50
}
```

## Development

1. Run "npm install"
2. Run "gulp"
3. Access to "http://localhost:8080/html/"
