import React, { PropTypes } from 'react'
import Animate from './Animate'

export const AnimateMixin = {
  componentWillMount() {
    this.animator = new Animate(this)
    this.setAnimate = this.animator.tween.bind(this.animator)
    this.stopAnimate = this.animator.stop.bind(this.animator)
  }
}
