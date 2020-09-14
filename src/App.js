import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './views/Home';
import Work from './views/Work';

function App() {
  return (
    <Router>

    <div className="App">
      <header className="App-header">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
      </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
