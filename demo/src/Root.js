import React, { PropTypes } from 'react'

function loadPage(name) {
  return (...args) => new Promise( (resolve, reject) => {
    switch(name) {
      case 'welcome':
      require.ensure([], (require) => resolve({ type: 'loadContent', data: require('./EasingExamples').default }))
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


const App = React.createClass({
  componentDidMount() {
    location.open(window.location.pathname)
  },
  render () {
    return (
      <div>
        <div style={{ zIndex: 9999, marginTop: -24, padding: 0, position: 'fixed', backgroundColor: '#FFF', width: '100%' }}>
          <h1>react-set-animate</h1>
          {/* change the <a>s to <Link>s */}
          <ul style={{listStyleType: 'none', marginTop: -60, float: 'right', marginRight: 20 }}>
            <li style={{ padding: 5, display: 'inline-block'}}><Link to="/easing">Easing Types</Link></li>
            <li style={{ padding: 5, display: 'inline-block'}}><Link to="/slidein">Slide In</Link></li>
            <li style={{ padding: 5, display: 'inline-block'}}><Link to="/slideout">Slide Out</Link></li>
            <li style={{ padding: 5, display: 'inline-block'}}><Link to="/tweencolor">Tween Color</Link></li>
          </ul>
        </div>
        <div style={{ paddingTop: 50 }}>
          <Container />

        </div>
      </div>
    )
  }
})

export default App
