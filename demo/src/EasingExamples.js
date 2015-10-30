import React from 'react';
import { AnimatedComponent, Eases } from 'react-set-animate'

export default class EasingExamples extends AnimatedComponent {
  constructor(props) {
    super(props)
    this.state = {
      left: 0,
      checked: false,
      isAnimating: false
    }
    this.setAnimate('bounce-in-out', 'left', 0, 4000)
    this.handleHeadingClick = this.handleHeadingClick.bind(this)
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
          <label>
            <input ref="moveAll" type="checkbox" checked={cmp.state.moveAll} onClick={(e) => cmp.setState({moveAll: e.target.checked})}/>
            All
          </label>
          {'  '}
          Animating? { this.state.isAnimating  ? 'Yes ' + this.state.ease : 'No' }
        </p>
        </div>
        {Eases.map((ease) =>
          <div style={{ paddingTop: 10, paddingBottom: 10, borderTop: '2px solid #999' }}>
            <button onClick={cmp.handleHeadingClick.bind(cmp,ease)}>Start {ease}</button>
            <div style={{zIndex: 3, height: 60, backgroundColor: '#eef', border: '1px solid black', marginTop: 12 }}>
              <div style={{ zIndex: 2, backgroundColor: '#000', borderRadius: 25, width: 50, height: 35, paddingTop: 15, textAlign: 'center', color: '#FFF', position: 'relative', left: (this.state.moveAll || cmp.state.ease === ease) ? cmp.state.left : 0 }}>
                { (this.state.moveAll || cmp.state.ease === ease) ? cmp.state.left.toFixed(0) : 0 }
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}
