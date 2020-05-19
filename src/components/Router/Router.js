import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Dashboard from '../Pages/Dashboard/Dashboard.container';
import Loans from '../Pages/Loans/index.container';
import MyAccount from '../Pages/MyAccount/MyAccount.container';
import Login from '../Auth/Login/Login.component';
import RestricterPage from '../Auth/RestrictedPage';
import { routes } from '../../config';
import Home from '../Home';
import Settings from '../Pages/Settings/Settings';

export default () => <>
  <Router>
    <Switch>
      <Route exact path={routes.home}>
        <Home /> 
      </Route>
      <Route exact path={routes.login}>
        <Login/>
      </Route>
      <Route exact path={routes.termsOfService}>
        Terms of Service
      </Route>
      <Route exact path={routes.privacyPolicy}>
        Privacy
      </Route>
      {/********* Restricted Pages  *************/}
      <Route exact path={routes.dashboard}>
        <RestricterPage>
          <Dashboard />
        </RestricterPage>
      </Route>
      <Route exact path={routes.loans}>
        <RestricterPage>
          <Loans />
        </RestricterPage>
      </Route>
      <Route exact path={routes.myAccount}>
        <RestricterPage>
          <MyAccount />
        </RestricterPage>
      </Route>
      <Route exact path={routes.settings}>
        <RestricterPage>
          <Settings/>
        </RestricterPage>
      </Route>
      {/********* Restricted Pages  *************/}
    </Switch>
  </Router>
</>;