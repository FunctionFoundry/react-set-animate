import React, { PropTypes } from 'react'
import branch from 'functionfoundry/fn/branch'
import {createStore} from 'pure-flux'
import {Link} from 'pure-flux-router'

var store = createStore('RootMenu', (state, action) => {
  return { show: false }
}, {
  toggleMenu: (state) => ({ show: !state.show })
})

const header = React.createClass({

  render () {

    var state = store.getState()
    let show = false

    return (
      <header className="navigation" role="banner">
        <div className="navigation-wrapper">
          <Link to="/" className="">
            React set animate
          </Link>
          <nav role="navigation">
            <Link action={() => store.dispatch('toggleMenu')} className="navigation-menu-button">MENU</Link>
            <ul>
              <li style={{ padding: 5, display: 'inline-block'}}></li>
            </ul>
          </nav>
        </div>
      </header>
    )

  }
})

export default header
