import React from 'react';
import { StyledFilaPage } from './StyledFilaPage';
import { Card } from '../../Componentes/Card/Card';
import { Botao } from '../../Componentes/Botao/Botao';

const FilaPage = () => {
    return (
        <StyledFilaPage>
            <Card title={"Sua posição"} content={5}/>
            <Botao path={'/'}>Sair da fila</Botao>
        </StyledFilaPage>
    );
};

export default FilaPage;