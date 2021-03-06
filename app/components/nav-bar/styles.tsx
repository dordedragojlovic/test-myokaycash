import styled from 'styled-components';
import { responsive } from 'styles/responsive';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 150px 0 150px;
  position: fixed;
  top: 0;
  width: -webkit-fill-available;
  background-color: #EBEBEB;
  height: 118px;
`;

export const Button = styled.button`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    text-decoration-line: underline;
    color: rgba(0, 0, 0, 0.25);
    border: 0;
    background-color: #EBEBEB;
    cursor: pointer;

    ${responsive.sm} {
        margin-top: 35px;
    }
`;