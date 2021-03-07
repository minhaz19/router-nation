import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import CountryDetail from './components/CountryDetail/CountryDetail';
import Home from './components/Home/Home';
import NotMatch from './components/NotMatch/NotMatch';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
            <Home></Home>
        </Route>
        <Route path="/detail/:countryName">
          <CountryDetail></CountryDetail>
        </Route>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route path="*">
          <NotMatch></NotMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
