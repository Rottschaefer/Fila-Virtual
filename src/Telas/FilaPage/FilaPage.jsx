import React from 'react';
import { StyledFilaPage } from './StyledFilaPage';
import { Card } from '../../Componentes/Card/Card';
import { Botao } from '../../Componentes/Botao/Botao';

const FilaPage = () => {

    const handleOnCkick = () => {  
        console.log('Clicou no botão');
    }
    return (
        <StyledFilaPage>
            <Card title={"Sua posição"} content={5}/>
            <Botao path={'/'} onClickFunction={handleOnCkick}>Sair da fila</Botao>
        </StyledFilaPage>
    );
};

export default FilaPage;