import React, { PropTypes } from 'react'

function loadPage(name) {
  return (...args) => new Promise( (resolve, reject) => {
    switch(name) {
      case 'welcome':
      require.ensure([], (require) => resolve({ type: 'loadContent', data: require('./Welcome').default }))
      return
      case 'easing':
      require.ensure([], (require) => resolve({ type: 'loadContent', data: require('./EasingExamples').default }))
      return
      case 'slidein':
      require.ensure([], (require) => resolve({ type: 'loadContent', data: require('./SlideIn').default }))
      return
      case 'slideout':
      require.ensure([], (require) => resolve({ type: 'loadContent', data: require('./SlideOut').default }))
      return
      case 'tweencolor':
      require.ensure([], (require) => resolve({ type: 'loadContent', data: require('./MorphColor').default }))
      return
      default:
      require.ensure([], (require) => resolve(require('./PageNotFound').default))
      return
    }
  })
}

var Router = require('pure-flux-router')({
  routes: [{
    path: '/',
    load: loadPage( 'welcome' )
  }, {
    path: '/easing',
    load: loadPage( 'easing' )
  }, {
    path: '/slidein',
    load: loadPage( 'slidein' )
  }, {
    path: '/slideout',
    load: loadPage( 'slideout' )
  }, {
    path: '/tweencolor',
    load: loadPage( 'tweencolor' )
  }, {
    path: '*',
    load: loadPage( '404' )
  }]
})

var { location, Container, Link } = Router

require('../scss/app.scss')

import Header from './header'
import Footer from './footer'

const App = React.createClass({
  componentDidMount() {
    location.redirect(window.location.pathname + window.location.search)
  },
  render () {
    let left = 0;
    return (
      <div id="foo" style={{ transform: 'translate3d(${left}px,0px,0px)' }}>
        <div>
        <Header />
        <Container />
        <Footer />
        </div>
      </div>
    )
  }
})

export default App
