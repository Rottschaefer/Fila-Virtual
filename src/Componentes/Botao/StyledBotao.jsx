import styled from 'styled-components';

export const StyledBotao = styled.button`
    width: 40vw;
    height: 7vh;
    padding: 10px 20px;
    border-radius: 8px;
    border: none;
    background-color: #00108c;
    color: white;
    font-size: 16px;
    cursor: pointer;

    &:active {
        transform: scale(0.98);
    }
`;