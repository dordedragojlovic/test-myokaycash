import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
    display: flex;
    border: 0;
    background: #1F2A3F;
    color: white;
    border-radius: 41px;
    height: 45px;
    width: 170px;
    font-size: 0.9rem;
    font-weight: 900;
    line-height: 29px;
    color: #FFFFFF;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    svg{
      height: 25px;
      width: 25px;
      margin-right: 10px;
    }
`;