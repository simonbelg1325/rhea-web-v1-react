import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SigninPage from './pages/signin';
import Maintenance from './pages/Maintenance';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/maintenance' component={Maintenance} exact />
        <Route exact path="/helpdesk" render={() => (window.location = "https://helpdesk.rhea.be")} />
        <Route path='/signin' component={SigninPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
