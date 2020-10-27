import React from 'react';
import { ButtonWrapper, Button } from './styles';

function IconButton({text, icon, onClick} : {text: string, icon , onClick}) {

  let Icon = icon;

  return (
    <ButtonWrapper>
        <Button onClick={onClick}>
            <Icon/>
            <a>{text}</a>
        </Button>
    </ButtonWrapper>

  );
}

export default IconButton;

