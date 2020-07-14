import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 180px;

  h1{
    font-weight: 900;
    font-size: 55px;
    line-height: 64px;
    text-align: center;
    color: #1F2A3F;
    margin: 0;
  }

  h5{
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #66C664;
    margin: 5px 0 80px 0;
  }
`;

export const ButtonContainer = styled.div`
    background: #66C664;
    border-radius: 41px;
    height: 68px;
    width: 233px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    cursor: pointer;

    button{
        height: inherit;
        width: inherit;
        font-weight: 900;
        font-size: 25px;
        line-height: 29px;
        color: #FFFFFF;
        border: 0;
        background: transparent;
        cursor: pointer;
    }
`;