import styled from "styled-components";

export const StyledFilaCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    max-width: 400px;
    width: 80vw;
    background-color: ${props => props.nome === 'Você' ? 'orange' : '#00108c'};
    color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

export const Matricula = styled.p`
    margin: 0;
    font-size: 1.5rem;
    text-align: center;
    width: auto;
`;

export const Chegada = styled.p`
    margin: 0;

    font-size: 1rem;
    text-align: center;
    width: auto;
`;

export const Ponteiro = styled.p`
    margin: 0;
    font-size: 1rem;
    text-align: center;
    width: auto;
`;

export const StyledTitleDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    /* margin: 0 auto; */
    /* padding: 1rem 0; */
    border-bottom: 1px solid #00108c;
`;

