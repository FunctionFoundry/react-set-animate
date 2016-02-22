import React, { PropTypes } from 'react'
import {Animate} from './Animate'

const AnimateMixin = {
  componentDidMount() {
    this.animator = new Animate(this)
    this.setAnimate = this.animator.tween.bind(this.animator)
  }
}

export default AnimateMixin
