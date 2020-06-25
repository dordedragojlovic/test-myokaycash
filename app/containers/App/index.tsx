/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from "apollo-boost";

import HomePage from 'containers/HomePage/Loadable';
import Linking from 'containers/Linking';
import LinkingSuccess from 'containers/LinkingSuccessPage';
import SecretCode from 'containers/SecretCodePage';
import Dashboard from 'containers/Dashboard';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import NavBar from 'components/nav-bar';
import PageWrapper from 'components/page-wrapper';

import GlobalStyle from '../../global-styles';

const client = new ApolloClient({
  uri: `https://myokaycash-backend.herokuapp.com/graphql`
});

function App() {
  return (
    <div>
      <NavBar/>
      <PageWrapper >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/linking" component={Linking} />
          <Route exact path="/linking-success" component={LinkingSuccess} />
          <Route exact path="/secret-code" component={SecretCode} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route component={NotFoundPage} />
        </Switch>
      </PageWrapper>
      <GlobalStyle />
    </div>
  );
}
export default hot(App);
