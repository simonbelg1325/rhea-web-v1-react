import React, {Suspense} from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Maintenance from './pages/Maintenance';
import Legacy from './pages/Legacy';
import Enhanced from './pages/Enhanced';
import References from './pages/References';
import ContactUs from './pages/ContactUs';
import ScrollToTop from './components/ScrollToTop';
import LoaderRhea from './components/LoaderRhea/LoaderRhea';
const Helpdesk = React.lazy(() => import('./pages/Helpdesk'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/maintenance' component={Maintenance} exact />
        <Route path='/enhanced' component={Enhanced} exact />
        <Route path='/legacy' component={Legacy} exact />
        <Route path='/references' component={References} exact />
        <Route path='/contactUs' component={ContactUs} exact />
        <Suspense fallback={<LoaderRhea />}>
          <Helpdesk />
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
