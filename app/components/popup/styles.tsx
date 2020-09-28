import styled from 'styled-components';
import { responsive } from 'styles/responsive';

export const PopupWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const PopupWindow = styled.div`
  position: absolute;
  left: 5%;
  right: 5%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  box-shadow: 8px 5px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  padding: 40px 50px;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  height: fit-content;
  background: white;
  border-radius: 31px;
  width: 860px;
  height: 580px;

  form{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${responsive.sm} {
    left: 2%;
    right: 2%;
    width: 700px;
  }


`;

export const PopupHeader = styled.div`
  width: 100%;
  padding: 20px 0;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  h1 {
    margin-left: 0;
  }
  i {
    color: #4c505b;
    font-size: 24px;
  }
  svg {
    height: 25px;
  }
  button {
    border: none;
    background: white;
  }
`;

export const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  color: #4c505b;
  margin-top: 0px;
  ${responsive.xs} {
    font-size: 1.4rem;
  }
`;

export const InputContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: #4c505b;

    h3{
      padding-left: 10px;
    }

    svg{
      height: 60px;
      width: 60px;
      margin-right: 25px;
    }

    input{
        background: #FFFFFF;
        border-radius: 74px;
        height: 50px;
        width: 42vh;
        font-weight: 400;
        font-size: 1.5rem;
        padding-left: 15px;
    }

  ${responsive.sm} {
    width: 100%;
  }

  ${responsive.iPadPro} {
    width: 100%;
  }

`;

export const InputSection = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
`