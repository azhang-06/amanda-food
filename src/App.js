import React from 'react';
import './styles.css';
import NavHeader from './components/NavHeader';
import Homepage from './screens/Homepage';
import Recipe from './screens/Recipe';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';


function App() {
  return (
    <HashRouter >
      <NavHeader />
      <Switch  >
        <Route path="/home">
          <Homepage />
        </Route>
        <Route path='/recipe/:id'>
          <Recipe />
        </Route>
        <Redirect from="/" to="/home" />
      </Switch>
    </HashRouter>
  );
}

export default App;
