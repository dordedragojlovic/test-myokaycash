import styled from 'styled-components';
import { responsive } from 'styles/responsive';

const PageWrapper = styled.div`
    padding: 120px 150px 10px 150px;

    ${responsive.md} {
        padding: 120px 60px 10px 60px;
    }

    ${responsive.sm} {
        padding: 120px 30px 10px 30px;
    }
`;

export default PageWrapper;