import {Component} from 'react'
import {Animate} from './Animate'
import {eases} from './Eases'

export class AnimatedComponent extends Component {
  constructor(props) {
    super(props)
    this.animator = new Animate(this)
    this.setAnimate = this.animator.tween.bind(this.animator)
    this.stopAnimate = this.animator.stop.bind(this.animator)
  }

}
