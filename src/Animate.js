/* Promise-based Animate routine */

import {ease} from 'd3-ease'
import {timer} from 'd3-timer'
import {interpolate} from 'd3-interpolate'

import eases from './Eases'

/**
* React state animation wrapper
*  - update state value by requestAnimationFrame loop
*/
export default class Animate {

  /* Animation constructor accept data container and frames per second.
  */
  constructor(component) {

    // keep internal reference to the component
    this._component = component;
    this._setStopped = false;

    // generate an interface function for each ease.
    eases.forEach( (e) => {
      // convert to camelCase
      var easeName = e.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });

      // add instance methods dynamically
      this[easeName] = function(prop, end, duration) {
        return this.animate(e, prop, end, duration)
      }

    });
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

  animate(easing, prop, end, duration) {

    return new Promise((resolve, reject) => {
      var begin = this._getStateValue(prop),
      i = interpolate(begin, end),
      easeFun = ease(easing)

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
