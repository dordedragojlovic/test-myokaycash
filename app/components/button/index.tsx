import React from 'react';

import { ButtonContainer } from './styles';

function StyledButton( {theme, text, submit} : {theme: Object, text: string, submit: boolean}) {

  return (
      <ButtonContainer theme={theme} >
          <button type={ submit ? "submit" : "button"}>{text}</button>
      </ButtonContainer>

  );
}

export default StyledButton;
