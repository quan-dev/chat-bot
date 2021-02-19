import CSS from 'csstype';
import React from 'react';

import { Button as ButtonBase, ButtonText } from './styles';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = React.memo((props) => {
  const activeStyle: CSS.Properties = {
    backgroundColor: '#f2fafd',
    color: '#009cde',
    boxShadow: 'unset',
  };

  const disableActiveStyle: CSS.Properties = { backgroundColor: '#fff', };

  const defaultTextButton: CSS.Properties = { color: '#616060', };

  const activeTextButton: CSS.Properties = {
    height: '28px',
    width: '110px',
    color: '#009cde',
    fontSize: '12px',
    fontWeight: 700,
    lineHeight: '14px',
    textAlign: 'center',
  };

  return (
    <ButtonBase
      activeButton={props.active}
      style={props.active ? activeStyle : disableActiveStyle}
      onClick={props.handleOnClick}
      {...props}
    >
      <ButtonText style={props.active ? activeTextButton : defaultTextButton}>
        {props.children}
      </ButtonText>
    </ButtonBase>
  );
});

export default Button;
