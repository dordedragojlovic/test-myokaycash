import React from 'react';
import { InputContainer, InputSection } from './styles';
import { FormPhoneStateHandler } from 'types';
import StyledButton from 'components/button';
import Phone from 'components/icons/phone';

function Popup({ form, loading }: { form: FormPhoneStateHandler, loading:boolean }) {
  return (
        <form onSubmit={form.handleSubmit}>
                <InputContainer>
                    <InputSection>
                      <Phone/>
                      <div>
                        <h3>Phone Number</h3>
                        <input
                            value={form.number}
                            onChange={form.onNumberChange}
                            />
                      </div>
                    </InputSection>
                </InputContainer>
            <StyledButton theme={ {color:"#66C664", width:"233px", height:"58px", font:"25px" }} text={"Add"} submit={true} loading={loading}/>
        </form>
  );
}

export default Popup;