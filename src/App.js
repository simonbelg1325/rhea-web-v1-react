import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Maintenance from './pages/Maintenance';
import Legacy from './pages/Legacy';
import Enhanced from './pages/Enhanced';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/maintenance' component={Maintenance} exact />
        <Route path='/enhanced' component={Enhanced} exact />
        <Route path='/legacy' component={Legacy} exact />
        <Route exact path="/helpdesk" render={() => (window.location = "https://helpdesk.rhea.be")} />
      </Switch>
    </Router>
  );
}

export default App;
