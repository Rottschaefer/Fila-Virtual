import React, { useEffect, useState } from 'react';
import { StyledFilaPage } from './StyledFilaPage';
import { Card } from '../../Componentes/Card/Card';
import { Botao } from '../../Componentes/Botao/Botao';
import { FilaFuncoes } from '../../script_webAssembly';

const FilaPage = () => {
    const [wasmFunctions, setWasmFunctions] = useState(null);
        const [fila, setFila] = useState(null);
        const [filaAlunos, setFilaAlunos] = useState([]);
    
        useEffect(() => {
            const loadWasm = async () => {
                const functions = await FilaFuncoes();
                setWasmFunctions(functions.exports);
            };
            loadWasm();
        }, []);

    
        // useEffect(() => {
        //     if (wasmFunctions) {
        //         criar_fila();
        //     }
        // }, [wasmFunctions]);
    
        // const criar_fila = async () => {
        //     const nova_fila = await wasmFunctions.cria_fila_alunos();
        //     setFila(nova_fila);
        // }

    const handleOnCkick = () => {  
        if (wasmFunctions) {
            const urlParams = new URLSearchParams(window.location.search);
            const ponteiro = urlParams.get('ponteiro');
            wasmFunctions.sair_fila(ponteiro);
            console.log("Aluno saiu da fila");
            console.log(wasmFunctions.numero_na_fila(ponteiro));

        }
    }
    return (
        <StyledFilaPage>
            <Card title={"Sua posição"} content={5}/>
            <Botao path={''} onClickFunction={handleOnCkick}>Sair da fila</Botao>
        </StyledFilaPage>
    );
};

export default FilaPage;