import React from 'react'
import { render } from 'react-dom'
import Page from './Root'

import { subscribe } from 'pure-flux'

subscribe( (state, action) => {
  console.log(new Date(), action, state)
})

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render((
  <Page />
), document.getElementById('root'))
