import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 25vh;
    max-width: 400px;
    width: 80vw;
    background-color: #00108c;
    color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 1rem;
`;

export const Content = styled.p`
    font-size: 2rem;
    text-align: center;
`;

