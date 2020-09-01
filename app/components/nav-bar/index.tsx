import React, { useContext } from 'react';
import MyOkayCash from '../icons/myOkayCash';
import { UserContext, defaultUser } from 'helpers/userContext';
import { useLocation } from 'react-router-dom'


import { Container, Button } from './styles';
import API from 'helpers/api';
import { useHistory } from 'react-router-dom';

const NavBar = () => {
  const history = useHistory();
  const {value, setContext} = useContext(UserContext);

  const reset = async () => {
    const { reset } = await API.cleareDB();
    setContext(defaultUser);

    let path = window.location.href;

    if(path.includes('linking-success') || path.includes('login') || path.includes('dashboard')){
      history.push('/');
    } else{
      location.reload();
    }  
  }

  return (
  <Container>
      <a href="/"><MyOkayCash/></a>
      <Button onClick={reset}>Reset</Button>
  </Container>
  );
};

export default NavBar;