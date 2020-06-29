import React from 'react';
import MyOkayCash from '../icons/myOkayCash';

import { Container, Button } from './styles';
import API from 'helpers/api';
import { useHistory } from 'react-router-dom';

const NavBar = () => {
  const history = useHistory();

  const reset = async () => {
    const { reset } = await API.cleareDB();
    history.push('/');
  }

  return (
  <Container>
      <a href="/"><MyOkayCash/></a>
      <Button onClick={reset}>Reset</Button>
  </Container>
  );
};

export default NavBar;