import React from 'react';
import MyOkayCash from '../icons/myOkayCash';

import { Container, Button } from './styles';

const NavBar = () => {
  return (
  <Container>
      <a href="/"><MyOkayCash/></a>
      <Button>Reset</Button>
  </Container>
  );
};

export default NavBar;
