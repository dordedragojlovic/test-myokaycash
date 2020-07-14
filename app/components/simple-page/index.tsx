import React from "react";

import { PageContainer, ButtonContainer } from './styles';


const SimplePage = ( {showButton, onClick, imgSrc, altText, h1, h5}: {showButton:boolean, onClick:any ,imgSrc: string, altText: string, h1: string, h5: string } ) => {
  return (
      <PageContainer>
          <div>
            <img src={imgSrc} alt={altText}/>
          </div>
          <h1>{h1}</h1>
          <h5>{h5}</h5>
          { showButton &&
            <ButtonContainer>
              <button onClick={onClick}>Next</button>
            </ButtonContainer>
          }
      </PageContainer>
  );
};
export default SimplePage;