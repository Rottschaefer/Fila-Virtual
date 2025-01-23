import { useEffect, useState } from "react";
import { Chegada, Matricula, Ponteiro, StyledFilaCard, StyledTitleDiv, Title } from "./StyledFilaCard";


export const FilaCard = ({ nome, matricula, horarioChegada, ponteiro, campus }) => {
    const [campus_word, setCampus] = useState("")

        useEffect(() => {
            switch (campus) {
                case 1:
                    setCampus("Praia Vermelha")
                    break;
                case 2:
                    setCampus("Gragoatá I")
                    break;
                case 3:
                    setCampus("Gragoatá II")
                    break;
            }
        },[])
    return (

        
        <StyledFilaCard nome={nome}>
            <StyledTitleDiv>
            <Title>{nome}</Title>
            <Matricula>Matrícula: {matricula}</Matricula>
            </StyledTitleDiv>
            <Chegada>Chegada: {horarioChegada}</Chegada>
            <Ponteiro>Local na memória: {ponteiro}</Ponteiro>
            <Ponteiro>Campus: {campus_word}</Ponteiro>
        </StyledFilaCard>
    );
};

