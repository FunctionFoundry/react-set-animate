import React, { Component } from 'react'
import { Link } from 'react-router'

export class App extends Component {
  render() {
    return (
      <div>
        <div style={{ zIndex: 9999, marginTop: -24, padding: 0, position: 'fixed', backgroundColor: '#FFF', width: '100%' }}>
          <h1>react-set-animate</h1>
          {/* change the <a>s to <Link>s */}
          <ul style={{listStyleType: 'none', marginTop: -60, float: 'right', marginRight: 20 }}>
            <li style={{ padding: 5, display: 'inline-block'}}><Link to="/about">Easing Types</Link></li>
            <li style={{ padding: 5, display: 'inline-block'}}><Link to="/slidein">Slide In</Link></li>
            <li style={{ padding: 5, display: 'inline-block'}}><Link to="/slideout">Slide Out</Link></li>
            <li style={{ padding: 5, display: 'inline-block'}}><Link to="/tweencolor">Tween Color</Link></li>
          </ul>
        </div>
        <div style={{ paddingTop: 50 }}>
          {/*
            next we replace `<Child>` with `this.props.children`
            the router will figure out the children for us
            */}
            {this.props.children}
          </div>
        </div>
      )
    }
  }
