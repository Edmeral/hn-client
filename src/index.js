import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import TopPage from './components/topPage'
import jobsPage from './components/jobsPage'
import newPage from './components/newPage'



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="top" component={TopPage}/>
      <Route path="new" component={newPage}/>
      <Route path="jobs" component={jobsPage}/>
      <IndexRedirect to="/top" />
    </Route>
  </Router>,
  document.getElementById('root')
);