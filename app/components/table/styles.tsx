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

