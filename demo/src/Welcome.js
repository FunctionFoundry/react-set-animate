import React, { PropTypes } from 'react'
import Markdown from 'react-remarkable'
import branch from 'functionfoundry/fn/branch'
import isEmail from 'functionfoundry/fn/isemail'
import FontAwesome from 'react-fontawesome'
import Modal from 'react-modal'
import {Link} from 'pure-flux-router'

const Welcome = React.createClass({

  render () {
   var loggedIn = false

   return (
      <div>
        <div className="hero">
          <div className="wrapper">
            <h1>Animation library for React</h1>
	          <h2>Time-based animiation your React.js components.</h2>
            <button type="button"
              className="secondary"
              onClick={() => window.location.href ="https://github.com/WebsiteHQ/react-set-animate"}>
              Check us out on github
            </button>
          </div>
        </div>
        <div className="section-block">
          <div className="wrapper">
            <div className="clincher">
              <h2>Moves the state in your component.</h2>
              <p className="blurb">
                This library animates "this.state" in your component. It is up to you to bind the value.
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="features">
            <div className="feature">
              <div className="copy">
                <h3><Link to="/easing?a=b">Easing Demo</Link></h3>
                <p>
                  Example that demonstrates eases functions support by the library.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="copy">
                <h3><Link to="/tweencolor">Tween Colors</Link></h3>
                <p>
                  Example slides a box in from the top left.
                </p>
              </div>
            </div>
          </div>
          <div className="features">
            <div className="feature">
              <div className="copy">
                <h3><Link to="/slidein">Slide In</Link></h3>
                <p>
                  Example slides a box in from the top left.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="copy">
                <h3><Link to="/slideout">Slide Out</Link></h3>
                <p>
                  Example slides a box out from the top left.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-block">
          <div className="wrapper">
            <div className="clincher">
              <h2>Install</h2>
              <Markdown>```npm install --save react-set-animate```</Markdown>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default Welcome
