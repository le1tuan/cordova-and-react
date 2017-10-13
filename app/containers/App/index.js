/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {rootAppDiv} from './styles';
import HomePage from 'containers/HomePage/Loadable';
import SignUpPage from 'containers/SignUpPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function App() {
  return (
    <MuiThemeProvider>
      <rootAppDiv>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/signup" component={SignUpPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </rootAppDiv>
    </MuiThemeProvider>
  );
}
