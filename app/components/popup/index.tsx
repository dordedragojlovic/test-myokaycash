import React from 'react';
import { PopupWindow, PopupWrapper, H1, PopupHeader} from './styles';
import CancelIcon from 'components/icons/cancel';

function Popup({ body, header, form, loading, closePopup, onClickClose }: { body, header:string, form, loading:boolean, closePopup, onClickClose }) {
    let Body = body;
  return (
    <PopupWrapper onClick={onClickClose}>
      <PopupWindow>
        <PopupHeader>
            <H1>{header}</H1>
            <button type="button" onClick={closePopup}>
            <CancelIcon/>
            </button>
        </PopupHeader>
        <Body form={form} loading={loading}/>
      </PopupWindow>
    </PopupWrapper>
  );
}

export default Popup;
