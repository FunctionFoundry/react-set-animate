import React from 'react';
import { AnimatedComponent } from 'react-set-animate'

export default class SlideIn extends AnimatedComponent {
  constructor(props) {
    super(props)

    this.state = {
      left: 50,
      top: 100,
      width: 0,
      height: 2
    }
  }

  componentDidMount() {
    this.setAnimate( 'height', 300, 2000, 'linear-in' )
    this.setAnimate( 'width', 1024, 2000, 'linear-in' )
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
      textAlign: 'center'
    }
  }
  render() {
    return <div style={this.getStyle()}>
      Hello
    </div>

  }
}
