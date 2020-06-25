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
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import NavBar from 'components/nav-bar';
import PageWrapper from 'components/page-wrapper';

import GlobalStyle from '../../global-styles';
import TestView from './../Test'

const client = new ApolloClient({
  uri: `https://myokaycash-backend.herokuapp.com/graphql`
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        {/* <NavBar/>
        <PageWrapper >
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </PageWrapper>
        <GlobalStyle /> */}
        <TestView/>
      </div>
    </ApolloProvider>
  );
}
export default hot(App);
