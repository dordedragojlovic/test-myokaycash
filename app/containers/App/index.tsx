import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import HomePage from 'containers/HomePage/Loadable';
import LinkingSuccess from 'containers/LinkingSuccessPage';
import LoginPage from 'containers/LoginPage'
import Dashboard from 'containers/Dashboard';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import NavBar from 'components/nav-bar';
import PageWrapper from 'components/page-wrapper';

import GlobalStyle from '../../global-styles';


function App() {
  return (
      <div>
        <NavBar/>
          <PageWrapper>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/linking-success" component={LinkingSuccess} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route component={NotFoundPage} />
            </Switch>
          </PageWrapper>
        <GlobalStyle />
      </div>
  );
}
export default hot(App);
