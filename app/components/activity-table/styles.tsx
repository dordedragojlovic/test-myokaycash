import styled from 'styled-components';
import { responsive } from 'styles/responsive';

export const ActivityDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  h3{
    margin:0;
  }
  ${responsive.mdpi} {
    margin-bottom: 15px;
      h3{
        font-size: 0.9rem;
      }
    }
`;

export const Date = styled.div`
  width: 35%;
  font-size: 28px;
  color: rgba(0, 0, 0, 0.55);
  ${responsive.mdpi} {
      font-size: 24px;
    }
`;

export const Price = styled.h3`
  font-weight: 300;
  color: ${p => (p.theme.positive ? '#7ED321' : 'red')};
`;

export const Month = styled.h4`
  margin: 25px 0 5px 0;
  color: rgba(0, 0, 0, 0.25);
  ${responsive.mdpi} {
      font-size: 0.9rem;
    }
`;

export const Title = styled.h1`
    color:#66C664;
    margin: 0;
    font-size: 1.3rem;

    ${responsive.mdpi} {
      font-size: 1rem;
    }
`;

export const RecentActivity = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  padding: 20px 30px;

  h5{
    color: rgba(0, 0, 0, 0.25);
    margin: 0;
  }

  ${responsive.sm} {
      width: 100%;
    }
    
  ${responsive.md} {
    width: 100%;
  }

  ${responsive.mdpi} {
    padding: 20px 30px 10px 30px;
  }
  ${responsive.iPadPro} {
    width: 100%;
  }
`;

export const ActivityType = styled.div`
    width: 40%;
    text-align: left;
`;

export const PriceTimeContainer = styled.div`
    width: 15%;
    text-align: right;

    h5{
      font-weight:400;
    }

    ${responsive.sm} {
      width: 20%;
    }

    ${responsive.mdpi} {
      width: 21%;
    }

    ${responsive.mac} {
      width: 21%;
    }
`;
