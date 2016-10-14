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
  }

  componentDidMount() {
    this.setAnimate('left', 0, 4000, 'bounce-in-out')
    this.handleHeadingClick = this.handleHeadingClick.bind(this)
  }

  handleHeadingClick(event) {
    if (this.state.isAnimating) { return; }
    this.state.isAnimating = true
    var cmp = this;
    cmp.setAnimate( 'left', +this.refs.distance.value, +this.refs.timeOut.value, this.state.ease)
    .then( () => this.setAnimate( 'left', 0, +this.refs.timeIn.value, this.state.ease) )
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
                transform: `translate3d(${this.state.left}px,0px,0px)` }}>
                { cmp.state.left.toFixed(0) }
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
