import React from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import framgiaImage from '../../../cordova/res/Default@2x~iphone~comcom.png';
import { Link } from 'react-router-dom';

export const RootHomePageDiv = styled.div `
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  font-family: 'Roboto', sans-serif;
`;

const LinkComponent = styled(Link)`
  flex-grow:0;
  text-align: center;
  margin: 10px;
`

const CommonButton = styled(RaisedButton)`
  width: 100%;
`;
export const RegisterButton = styled(CommonButton)`
`;

const OrLetter = styled.div`
  flex-grow: 0;
  text-align: center;
`;

export const Banner = styled.div`
  flex-grow:0;
  flex-basis: 60%;
  margin-bottom: 20px;
  background-image: url(${framgiaImage});
`;
export const renderComponent = (name) => {
  return name === 'Or' ? mapNameToComponent(OrLetter, name) : mapNameToComponent(RegisterButton, name)
}

const mapNameToComponent = (Component, name) => {
  if(name === 'Register By Facebook') {
    return <LinkComponent key={name} to="/signup"><Component label={name} primary={true}></Component></LinkComponent>
  }else if (name === 'Register By Email') {
    return <LinkComponent key={name}  to="/signup"><Component label={name} secondary={true}></Component></LinkComponent>
  }else if (name === 'Login'){
    return <LinkComponent key={name}  to="/login"><Component label={name} ></Component></LinkComponent>
  }
  return <Component key={name} label={name} primary={true}></Component>
  
};
