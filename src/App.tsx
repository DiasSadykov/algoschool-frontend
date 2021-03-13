import React from 'react';
import ProblemList from './Components/ProblemList/ProblemList';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import About from './Components/About/About';
import Problem from './Components/Problem/Problem';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/problem/:category/:id">
          <Problem/>
        </Route>
        <Route path="/">
          <ProblemList/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
