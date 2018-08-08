
import React from 'react'
import { render } from 'react-dom'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import App from './components/App'
import Whoops404 from './components/Whoops404'

render(<Router>
  <Switch>
    <Route exact path='/' component={App} />
    {/* both /roster and /roster/:number begin with /roster */}
    <Route path='*' component={Whoops404} />
  </Switch>
</Router>,
  document.getElementById('react-container')
)
