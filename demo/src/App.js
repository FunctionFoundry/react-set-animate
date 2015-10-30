import React, { Component } from 'react'
import { NICE, SUPER_NICE } from './colors'
import { AnimatedComponent, Eases } from 'react-set-animate'

class Counter extends AnimatedComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      left: 0,
      checked: false,
      isAnimating: false
    }
    this.tick = this.tick.bind(this)
    this.interval = setInterval( this.tick, 1000)
    this.setAnimate('bounce-in-out', 'left', 0, 4000)
    this.handleHeadingClick = this.handleHeadingClick.bind(this)
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment,
    })
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  handleHeadingClick(ease, event) {
    if (this.state.isAnimating) { return; }
    this.state.isAnimating = true
    var cmp = this;
    this.state.ease = ease
    cmp.setAnimate(this.state.ease, 'left', +this.refs.distance.value, +this.refs.timeOut.value)
    .then( () => cmp.setAnimate(this.state.ease, 'left', 0, +this.refs.timeIn.value) )
    .then( () => this.setState({isAnimating: false, ease: '' }))
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
          <hr />
          <input ref="moveAll" type="checkbox" checked={cmp.state.moveAll} onClick={(e) => cmp.setState({moveAll: e.target.checked})}/>
          All
          Animating? {this.state.isAnimating  ? 'Yes ' + this.state.ease : 'No'}
        </p>
        {Eases.map((ease) =>
          <div style={{ paddingTop: 10, paddingBottom: 10, borderTop: '2px solid #999' }}>
            <button onClick={cmp.handleHeadingClick.bind(cmp,ease)}>Start {ease}</button>
            <div style={{height: 90, backgroundColor: '#eef', border: '1px solid black', marginTop: 12 }}>
              <h2 style={{ backgroundColor: '#000', borderRadius: 25, width: 50, height: 40, paddingTop: 10, textAlign: 'center', color: cmp.props.color, position: 'relative', left: (this.state.moveAll || cmp.state.ease === ease) ? cmp.state.left : 0 }}>
                { (this.state.isAnimating && (this.state.moveAll || cmp.state.ease === ease)) ? cmp.state.left.toFixed(0) : cmp.state.counter}
              </h2>
          </div>
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
