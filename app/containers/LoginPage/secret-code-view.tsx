import React from "react";

import SimplePage from 'components/simple-page';


const SecretCodeView = ({ secretCode }: { secretCode: string }) => {
  const text = `Enter ${secretCode} in on your mobile to complete validation`
  return (
    <SimplePage showButton={false} onClick="" imgSrc="https://i.ibb.co/Fgt1MbB/vectorpaint.png" altText="Okay" h1="Secret Code" h5={text}/>
  );
};
export default SecretCodeView;