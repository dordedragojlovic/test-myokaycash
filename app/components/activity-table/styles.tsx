import styled from 'styled-components';
import { responsive } from 'styles/responsive';

export const ActivityDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  h3{
    margin:0;
  }
  ${responsive.md} {
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
  ${responsive.md} {
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
  ${responsive.md} {
      font-size: 0.9rem;
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
`;
