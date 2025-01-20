import React from 'react';
import { StyledTelaInicial } from './StyledTelaInicial';
import { Card } from '../../Componentes/Card/Card';
import { Botao } from '../../Componentes/Botao/Botao';


const TelaInicial = () => {

    return (
        <StyledTelaInicial>
            <Card title={"Alunos na Fila"} content={102}/>
            <Botao path={'/fila'}>Entrar na fila</Botao>
        </StyledTelaInicial>
    );
};

export default TelaInicial;