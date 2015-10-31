import {Component} from 'react'
import Animate from './Animate'
import eases from './Eases'

export default class AnimatedComponent extends Component {
  constructor(props) {
    super(props)
    this.animator = new Animate(this)
    this.setAnimate = this.animator.animate
    this.stopAnimate = this.animator.stop
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
