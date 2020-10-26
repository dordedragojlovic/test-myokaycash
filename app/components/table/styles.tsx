import styled from 'styled-components';
import { responsive } from 'styles/responsive';

export const ComponentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  padding: 10px 30px;
  margin-bottom: 30px;
`;

export const StyledTable = styled.table`
  width: 100%;
  tr{
      height: 40px;
  }
  td{
    text-align: center;
  }

  th:first-of-type, td:first-of-type{
      text-align: left;
  }

  ${responsive.sm} {
    tr{
      font-size: 0.9rem;
    }
    td{
      font-size: 0.9rem;
    }
  }


`;

export const Title = styled.h1`
    color:#66C664;
    margin: 0;
    font-size: 1.3rem;

    ${responsive.md} {
      font-size: 1rem;
    }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 10px 0;
  padding-top: 20px;
  border-top: 1px solid;
`;

export const IconButton = styled.button`
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
    justify-content: space-evenly;
    align-items: center;

    svg{
      height: 25px;
      width: 25px;
    }
`;