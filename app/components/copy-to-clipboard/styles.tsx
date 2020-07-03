import styled from 'styled-components';

export const PageContainer = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: -webkit-fill-available;
        
    textarea{
        border: 0;
        font-size: 22px;
        resize: none;
        height: 30px;
        width: 200px;
        padding-top: 5px;
        font-family: inherit;
    }

    button{
        background: #1F2A3F;
        border-radius: 41px;
        height: 32px;
        width: 110px;
        text-align: center;
        cursor: pointer;
        font-weight: 900;
        font-size: 16px;
        line-height: 29px;
        color: #FFFFFF;
        border: 0;
        cursor: pointer;
        margin: 3px 5px 0 20px
    }
`;