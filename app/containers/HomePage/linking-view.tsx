import { User } from 'types';
import React from 'react';
import { LinkingContainer, LinkingTextSection, QRSection, QRContainer, CardNumberContainer } from './styles';

function LinkingView({user, copyToClipboard, textAreaRef }: {user: User, copyToClipboard, textAreaRef: React.MutableRefObject<null>}) {

  console.log('user.qrCode',user.qrCode);

  return (
    <LinkingContainer>
      <LinkingTextSection>
        <h1>Okay, {user.name}</h1>
        <h5>Finalize your registration by scanning the QR code or enter the 6 digit number in to your app</h5>
        <div>
          <h4>Save your credit card number</h4>
          <CardNumberContainer>
            <form>
              <textarea
                ref={textAreaRef}
                defaultValue={user.cardInfo.number}
              />
            </form>
            {
            document.queryCommandSupported('copy') &&
              <div>
                <button onClick={copyToClipboard}>Copy</button> 
              </div>
            }
          </CardNumberContainer>
        </div>
      </LinkingTextSection>
      <QRSection>
        <QRContainer>
          <img  src={`data:image/png;base64,${user.qrCode}`}  alt="QR Code"  />
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