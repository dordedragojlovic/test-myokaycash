import React from "react";
import { useHistory } from 'react-router-dom';

import SimplePage from 'components/simple-page';




const LinkingSuccess = () => {
  const history = useHistory();

  function nextStep(){
    history.push('/login');
  }

  return (
    <SimplePage showButton={true} onClick={nextStep} imgSrc="https://i.ibb.co/z877pHD/Frame.png" altText="Okay" h1="It's Okay" h5="Successful Linking"/>
  );
};
export default LinkingSuccess;