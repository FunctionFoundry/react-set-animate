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
      color1: '#000',
      color2: '#000',
      color3: '#000'
    }

  }

  componentDidMount() {
    this.setAnimate( 'color1', '#FFF', 1000, 'linear-in' )
    this.setAnimate( 'color2', 'red', 1000, 'linear-in' )
    this.setAnimate( 'color3', 'green', 1000, 'linear-in' )
  }

  getStyle(offset, color) {
    return {
      position: 'fixed',
      left: this.state.left + offset,
      top: this.state.top,
      width: this.state.width,
      height: this.state.height,
      backgroundColor: color,
      color: '#FFF',
      fontSize: '3em',
      textAlign: 'center'
    }
  }
  render() {
    return (
      <div>
        <div style={this.getStyle(0, this.state.color1)}>
          Hello
        </div>
        <div style={this.getStyle(200, this.state.color2)}>
          Hello
        </div>
        <div style={this.getStyle(400, this.state.color3)}>
          Hello
        </div>
      </div>
    )
  }
}
