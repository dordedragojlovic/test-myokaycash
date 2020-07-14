import React, { useContext } from 'react';
import MyOkayCash from '../icons/myOkayCash';
import { UserContext, defaultUser } from 'helpers/userContext';


import { Container, Button } from './styles';
import API from 'helpers/api';
import { useHistory } from 'react-router-dom';

const NavBar = () => {
  const history = useHistory();
  const {value, setContext} = useContext(UserContext);

  const reset = async () => {
    const { reset } = await API.cleareDB();
    
    setContext(defaultUser);
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