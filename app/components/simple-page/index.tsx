import React from "react";

import { PageContainer } from './styles';


const SimplePage = ( {imgSrc, altText, h1, h5}: {imgSrc: string, altText: string, h1: string, h5: string } ) => {
  return (
      <PageContainer>
          <div>
            <img src={imgSrc} alt={altText}/>
          </div>
          <h1>{h1}</h1>
          <h5>{h5}</h5>
      </PageContainer>
  );
};
export default SimplePage;