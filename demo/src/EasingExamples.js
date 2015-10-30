import React from 'react';
import { AnimatedComponent, Eases } from 'react-set-animate'

export default class EasingExamples extends AnimatedComponent {
  constructor(props) {
    super(props)
    this.state = {
      left: 0,
      checked: false,
      isAnimating: false,
      ease: 'bounce-in-out'
    }
    this.setAnimate('bounce-in-out', 'left', 0, 4000)
    this.handleHeadingClick = this.handleHeadingClick.bind(this)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  handleHeadingClick(event) {
    if (this.state.isAnimating) { return; }
    this.state.isAnimating = true
    var cmp = this;
    cmp.setAnimate(this.state.ease, 'left', +this.refs.distance.value, +this.refs.timeOut.value)
    .then( () => this.setAnimate(this.state.ease, 'left', 0, +this.refs.timeIn.value) )
    .then( () => this.setState({isAnimating: false }))
  }

  render() {
    var cmp = this;
    return (
      <div style={{paddingTop: 150 }}>
        <div style={{ zIndex: 999, position: 'fixed', top: 50, backgroundColor: 'white', height: 150, width: '100%'}}>
          <h1>Slider Demo</h1>
          <p>
            Time out:
            <input ref="timeOut" defaultValue={1000} />
            Time in:
            <input ref="timeIn" defaultValue={500} />
            Out distance
            <input ref="distance" defaultValue={768} />
            <hr />

            <select value={cmp.state.ease} onChange={(e) => this.setState({ ease: e.target.value }) }>
              {Eases.map(n => <option>{n}</option>)}
            </select>

            {'  '}
            <button onClick={cmp.handleHeadingClick} disabled={this.state.isAnimating}>Start</button>

            <label>
              <input ref="moveAll" type="checkbox" checked={this.state.isAnimating} readOnly/>
              Animating
            </label>
          </p>
        </div>
        <div style={{ paddingTop: 10, paddingBottom: 10, borderTop: '2px solid #999' }}>
          <h2>{cmp.state.ease}</h2>
          <div style={{zIndex: 3, height: 60, backgroundColor: '#eef', border: '1px solid black', marginTop: 12 }}>
            <div style={{ zIndex: 2,
                backgroundColor: '#000',
                borderRadius: 25, width: 50,
                height: 35, paddingTop: 15,
                textAlign: 'center', color: '#FFF',
                position: 'relative',
                left: cmp.state.left }}>
                { cmp.state.left.toFixed(0) }
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
