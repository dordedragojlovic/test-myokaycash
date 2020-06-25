import { FormStateHandler } from './types';
import React from 'react';
import { PageContainer, TextSection, QRSection, QRContainer } from './styles';

function LinkingView() {
  return (
    <PageContainer>
      <TextSection>
        <h1>Okay, Cash</h1>
        <h5>Finalize your registration by scanning the QR code or enter the 6 digit number in to your app</h5>
      </TextSection>
      <QRSection>
        <QRContainer>
          <img  src="https://i.ibb.co/7Gq4J4n/ezgif-com-crop.png"  alt="QR Code"  />
          <h5>1234</h5>
        </QRContainer>
        <div>
          <img  src="https://i.ibb.co/SmRXD2D/app-store.png"  alt="App Store"  />
          <img  src="https://i.ibb.co/RStPGsW/google-play.png"  alt="Google Play"  />
        </div>
      </QRSection>
    </PageContainer>
  );
}

export default LinkingView;