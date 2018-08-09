
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
    <Route exact path='/list-days' component={App} />
    <Route path='/list-days/:filter' component={App} />
    <Route exact path='/add-day' component={App} />
    <Route path='*' component={Whoops404} />
  </Switch>
</Router>,
  document.getElementById('react-container')
)
