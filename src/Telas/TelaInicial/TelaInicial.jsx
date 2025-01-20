import React, { useEffect, useState } from 'react';
import { StyledTelaInicial } from './StyledTelaInicial';
import { Card } from '../../Componentes/Card/Card';
import { Botao } from '../../Componentes/Botao/Botao';
import { FilaFuncoes } from '../../script_webAssembly';


const TelaInicial = () => {

    const [wasmFunctions, setWasmFunctions] = useState(null);

    useEffect(() => {
        const loadWasm = async () => {
            const functions = await FilaFuncoes();
            setWasmFunctions(functions);
        };
        loadWasm();
    }, []);

    const handleOnClick = () => {
        if (wasmFunctions) {
            const fila = wasmFunctions.cria_fila_alunos();
            console.log('Fila criada:', fila);
        }
    };
    return (
        <StyledTelaInicial>
            <Card title={"Alunos na Fila"} content={102}/>
            <Botao path={'/fila'} onClickFunction={handleOnClick}>Entrar na fila</Botao>
        </StyledTelaInicial>
    );
};

export default TelaInicial;