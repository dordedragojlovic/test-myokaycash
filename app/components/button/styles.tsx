import styled from 'styled-components';

export const ButtonContainer = styled.div`
    background: ${p => p.theme.color};
    border-radius: 41px;
    height: ${p => p.theme.height};
    width: ${p => p.theme.width};
    display: flex;
    justify-content: center;
    cursor: pointer;

    button{
        font-weight: 900;
        font-size: ${p => p.theme.font};
        line-height: 29px;
        color: #FFFFFF;
        border: 0;
        background: transparent;
        cursor: pointer;
    }
`;
