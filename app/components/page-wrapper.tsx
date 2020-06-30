import styled from 'styled-components';
import { responsive } from 'styles/responsive';

const PageWrapper = styled.div`
    padding: 120px 150px 10px 150px;

    ${responsive.sm} {
        padding: 120px 100px 10px 100px;
    }
`;

export default PageWrapper;