import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import EasingExamples from './EasingExamples';
import SlideIn from './SlideIn';
import SlideOut from './SlideOut';
import MorphColor from './MorphColor';

import { Router, Route } from 'react-router'

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={EasingExamples} />
      <Route path="slidein" component={SlideIn} />
      <Route path="slideout" component={SlideOut} />
      <Route path="tweencolor" component={MorphColor} />
    </Route>
  </Router>
), document.getElementById('root'));
