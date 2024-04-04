import React from 'react';
import './styles.css';
import NavHeader from './components/NavHeader';
import Homepage from './screens/Homepage';
import Recipe from './screens/Recipe';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter >
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
    </BrowserRouter>
  );
}

export default App;
