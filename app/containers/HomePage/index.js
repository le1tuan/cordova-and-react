/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { RootHomePageDiv, Banner, renderComponent } from './styles';

const labelButton = ["Register By Email", "Register By Facebook", "Or", "Login"]
export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const content = labelButton.map(x => {
      return renderComponent(x);
    });
    return (
      <RootHomePageDiv>
        <Banner/>
        {content}
      </RootHomePageDiv>
    );
  }
}
