import React from 'react';
import styled from 'styled-components';

export const RootHomePageDiv = styled.div `
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const OrLetter = styled.div`
  flex-grow:0;
  flex-basis: 10%;
  margin: 10px;
  text-align: center;
`;
const RegisterButton = styled(OrLetter)`
  border: 1px solid black;
`;

export const Banner = styled.div`
  flex-grow:0;
  flex-basis: 40%;
  border: 1px solid black;
  margin-bottom: 20px;
`;
export const renderComponent = (name) => name === 'Or' ? mapNameToComponent(OrLetter, name) : mapNameToComponent(RegisterButton, name);

const mapNameToComponent = (Component, name) => (<Component key={name}><p>{name}</p></Component>);