/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';

const AppWrapper = styled.div`
  background-image: url("https://wallpapercave.com/wp/Cxi1PUf.png");
  background-position: center;
  height: 100vh
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="Pokedex"
        defaultTitle="Pokedex"
      >
        <meta name="description" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </AppWrapper>
  )
}
