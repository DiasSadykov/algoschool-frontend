import React, { useEffect } from 'react';
import ProblemList from './Components/ProblemList/ProblemList';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './Components/About/About';
import Problem from './Components/Problem/Problem';
import { useDispatch, useSelector } from 'react-redux';
import firebase from './firebase';
import { fetchUserData, login, logout, setDarkMode, unsetUserData } from './Actions/user';
import { fetchProblems } from './Actions/problems';
import { getDarkMode } from './Selectors/user';
function App() {
  const dispatch = useDispatch()
  const darkMode = useSelector(getDarkMode)
  dispatch(setDarkMode(darkMode))
  useEffect(() => {
    dispatch(fetchProblems)
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
        if (user){
            dispatch(login(user))
            dispatch(fetchUserData(user.uid))
        } else {
            dispatch(logout())
            dispatch(unsetUserData())

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
