import React, { useEffect } from 'react';
import ProblemList from './Components/ProblemList/ProblemList';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import About from './Components/About/About';
import Problem from './Components/Problem/Problem';
import { useDispatch } from 'react-redux';
import firebase from './firebase';
import { login, logout } from './Actions/user';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
        console.log(user)
        if (user){
            dispatch(login(user))
        } else {
            dispatch(logout())
        }
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, [dispatch]);
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
