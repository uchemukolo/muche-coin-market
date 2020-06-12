import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainNav from './MainNav';
import GetCoins from './GetCoins';


const Routes = () => (
  <BrowserRouter>
    <div id="wrap">
      <MainNav />
      <Switch>
        <Route exact path="/" component={GetCoins} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
