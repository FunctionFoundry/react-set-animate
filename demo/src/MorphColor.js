import React from 'react';
import { AnimatedComponent } from 'react-set-animate'

export default class MorphColor extends AnimatedComponent {
  constructor(props) {
    super(props)

    this.state = {
      left: 50,
      top: 100,
      width: 200,
      height: 200,
      color: '#000'
    }

    this.setAnimate( 'color', '#FFF', 1000, 'linear-in' )
  }

  getStyle() {
    return {
      position: 'fixed',
      left: this.state.left,
      top: this.state.top,
      width: this.state.width,
      height: this.state.height,
      backgroundColor: this.state.color,
      color: '#FFF',
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
