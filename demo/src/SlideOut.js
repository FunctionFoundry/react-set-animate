import React from 'react';
import { AnimatedComponent } from 'react-set-animate'

export default class SlideIn extends AnimatedComponent {
  constructor(props) {
    super(props)

    this.state = {
      left: 50,
      top: 100,
      width: 1024,
      height: 300
    }

    this.setAnimate('linear-in', 'height', 0, 2000)
    this.setAnimate('linear-in', 'width', 0, 2000)
    .then(() => this.setAnimate('bounce-in-out', 'top', 100, 2000 ))

  }

  getStyle() {
    return {
      position: 'fixed',
      left: this.state.left,
      top: this.state.top,
      width: this.state.width,
      height: this.state.height,
      backgroundColor: 'red',
      color: 'white',
      fontSize: '3em',
      textAlign: 'center',
    }
  }
  render() {
    return <div style={this.getStyle()}>
      Hello
    </div>

  }
}
