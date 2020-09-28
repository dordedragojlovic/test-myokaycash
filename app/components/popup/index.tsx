import React from 'react';
import { PopupWindow, PopupWrapper, H1, PopupHeader, InputContainer, InputSection } from './styles';
import { FormDeviceStateHandler } from 'types';
import StyledButton from 'components/button';
import Barcode from 'components/icons/barcode';
import IoTDevice from 'components/icons/iotDevice';
import CancelIcon from 'components/icons/cancel'

function Popup({ form, loading, closePopup, onClickClose }: { form: FormDeviceStateHandler, loading:boolean, closePopup, onClickClose }) {
  return (
    <PopupWrapper onClick={onClickClose}>
      <PopupWindow>
      <PopupHeader>
          <H1>Add trusted device</H1>
          <button type="button" onClick={closePopup}>
          <CancelIcon/>
          </button>
        </PopupHeader>
        <form onSubmit={form.handleSubmit}>
                <InputContainer>
                    <InputSection>
                      <IoTDevice/>
                      <div>
                        <h3>Device ID</h3>
                        <input
                            value={form.deviceId}
                            onChange={form.onDeviceIdChange}
                            />
                      </div>
                    </InputSection>
                    <InputSection>
                      <Barcode/>
                      <div>
                        <h3>Device certificate</h3>
                        <input
                            value={form.certificate}
                            onChange={form.onCertificateChange}
                        />
                        </div>
                    </InputSection>
                </InputContainer>
            <StyledButton theme={ {color:"#66C664", width:"233px", height:"58px", font:"25px" }} text={"Add"} submit={true} loading={loading}/>
    </form>
      </PopupWindow>
    </PopupWrapper>
  );
}

export default Popup;