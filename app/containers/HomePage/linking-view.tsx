import { User } from './types';
import React from 'react';
import { LinkingContainer, LinkingTextSection, QRSection, QRContainer } from './styles';

function LinkingView({user}: {user: User}) {
  return (
    <LinkingContainer>
      <LinkingTextSection>
        <h1>Okay, {user.name}</h1>
        <h5>Finalize your registration by scanning the QR code or enter the 6 digit number in to your app</h5>
      </LinkingTextSection>
      <QRSection>
        <QRContainer>
          <img  src="https://i.ibb.co/7Gq4J4n/ezgif-com-crop.png"  alt="QR Code"  />
          <h5>{user.code}</h5>
        </QRContainer>
        <div>
          <img  src="https://i.ibb.co/SmRXD2D/app-store.png"  alt="App Store"  />
          <img  src="https://i.ibb.co/RStPGsW/google-play.png"  alt="Google Play"  />
        </div>
      </QRSection>
    </LinkingContainer>
  );
}

export default LinkingView;