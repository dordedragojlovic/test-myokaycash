import React from 'react';
import Loader from 'components/loader'
import { ButtonContainer } from './styles';

function StyledButton( {theme, text, submit, loading} : {theme: Object, text: string, submit: boolean, loading: boolean}) {

  return (
      <ButtonContainer theme={theme} >
          {!loading && <button type={ submit ? "submit" : "button"}>{text}</button>}
          {loading && <Loader loading={loading} />}
      </ButtonContainer>

  );
}

export default StyledButton;
