/* Promise-based Animate routine */

import * as eases from 'd3-ease'
import {timer} from 'd3-timer'
import {interpolate} from 'd3-interpolate'

/**
* React state animation wrapper
*  - update state value by requestAnimationFrame loop
*/
export class Animate {

  /* Animation constructor accept data container and frames per second.
  */
  constructor(component) {

    // keep internal reference to the component
    this._component = component;
    this._setStopped = false;

  }

  /**
  * Get state value
  * if the prop is not in state regular property
  */
  _getStateValue(prop) {
    var c = this._component,
    v = c.state && c.state[prop]
    return v === undefined ? c[prop] : v
  }

  /**
  * Set value to state
  * if the prop is not in state, set value to regular property with force update
  */
  _updateStateValue(prop, v) {
    var c = this._component
    if(c.state && c.state[prop] !== undefined){
      var state = {}
      state[prop] = v
      c.setState(state)
    }else{
      c[prop] = v
      c.forceUpdate()
    }
  }

  stop() {
    this._setStopped = true;
  }

  tween( prop, end, duration=500, easing='Linear') {

    return new Promise((resolve, reject) => {
      var begin = this._getStateValue(prop),
      i = interpolate(begin, end),
      easeFun = eases['ease' + easing] || eases.easeLinear

      /* The timer stops when the callback retuns a truthy value */
      timer( (elapsed,d) => {

        if (this._setStopped) { return true; }

        var progress = easeFun( elapsed / duration ),

        value = i(progress)

        this._updateStateValue(prop, value, resolve)

        if (elapsed > duration) {
          this._updateStateValue(prop, end, resolve)
          resolve()
          return true;
        }

      })
    })
  }
}
