import React, { Component } from 'react'
import { NICE, SUPER_NICE } from './colors'
import { AnimatedComponent, Eases } from 'react-set-animate'

class Counter extends AnimatedComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      left: 1000,
      checked: false
    }
    this.tick = this.tick.bind(this)
    this.interval = setInterval( this.tick, 1000)
    this.setAnimate('bounce-in-out', 'left', 0, 4000)
    this.handleHeadingClick = this.handleHeadingClick.bind(this)
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    })
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  handleHeadingClick(ease, event) {
    var cmp = this;
    this.state.ease = ease
    cmp.setAnimate(this.state.ease, 'left', this.refs.distance.value, this.refs.timeOut.value)
    .then( () => cmp.setAnimate(this.state.ease, 'left', 0, this.refs.timeIn.value) )
  }

  render() {
    var cmp = this;
    return (
      <div>
        <h1>Slider Demo</h1>
        <p>
          Time out:
          <input ref="timeOut" defaultValue={1000} />
          Time in:
          <input ref="timeIn" defaultValue={500} />
          Out distance
          <input ref="distance" defaultValue={768} />
          All
          <input ref="moveAll" type="checkbox" checked={cmp.state.moveAll} onClick={(e) => cmp.setState({moveAll: e.target.checked})}/>
        </p>
        {Eases.map((ease) =>
          <div>
            <button onClick={cmp.handleHeadingClick.bind(cmp,ease)}>Start {ease}</button>
            <h2 style={{ backgroundColor: '#000', borderRadius: 25, width: 50, height: 40, paddingTop: 10, textAlign: 'center', color: cmp.props.color, position: 'relative', left: (this.state.moveAll || cmp.state.ease === ease) ? cmp.state.left : 0 }}>
              {cmp.state.counter}
            </h2>
          </div>
        )}
      </div>
    )
  }
}

export class App extends Component {
  render() {
    return (
      <div>
        <Counter increment={1} color={'#FFF'} />
      </div>
    );
  }
}
