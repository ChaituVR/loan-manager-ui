import React from 'react';
import logoMainWhiteBackground from '../../../images/logo/none-bg/vector/default-monochrome.svg';

export const Logo = (props) => {
  switch (props.type){
  case 'logo-main-white-background':
    return <img src={logoMainWhiteBackground} alt={props.type} {...props}/>;
  default:
    return <img src={logoMainWhiteBackground} alt={props.type} {...props}/>;
  }
};