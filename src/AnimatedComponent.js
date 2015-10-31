import {Component} from 'react'
import Animate from './Animate'
import eases from './Eases'

export default class AnimatedComponent extends Component {
  constructor(props) {
    super(props)
    this.animator = new Animate(this)
    this.setAnimate = this.animator.animate

    eases.forEach( (e) => {
      
      // convert to camelCase
      var easeName = e.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });

      // add instance methods dynamically
      return this[easeName]( prop, end, duration )

    });
  }

  _getStateValue(prop) {
    return this.state[prop]
  }

  _updateStateValue(prop, v) {
    var updates = {}
    updates[prop] = v
    this.setState(updates)
  }
}
