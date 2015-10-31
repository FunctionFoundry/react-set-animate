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
  }

  componentDidMount() {
    this.setAnimate( 'height', 0, 2000, 'linear-in')
    this.setAnimate( 'width', 0, 2000, 'linear-in' )
    .then(() => this.setAnimate( 'top', 100, 2000, 'bounce-in-out' ))
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
