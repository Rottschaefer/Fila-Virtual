import React, { useEffect, useState } from 'react';
import { StyledTelaInicial } from './StyledTelaInicial';
import { Card } from '../../Componentes/Card/Card';
import { Botao } from '../../Componentes/Botao/Botao';
import { FilaFuncoes } from '../../script_webAssembly';


const TelaInicial = () => {

    const [wasmFunctions, setWasmFunctions] = useState(null);
    const [wasmModule, setWasmModule] = useState(null);
    const [fila, setFila] = useState(null);
    const [filaAlunos, setFilaAlunos] = useState([]);

    useEffect(() => {
        const loadWasm = async () => {
            const functions = await FilaFuncoes();
            setWasmFunctions(functions.exports);
            setWasmModule(functions);
            
        };
        loadWasm();
    }, []);

    useEffect( () => {
        if (wasmFunctions) {
             criar_fila();
            const aluno1 = wasmFunctions.cria_aluno("João", 167821765, "horario", 0);
            console.log("criou aluno1");
            console.log(aluno1);
            wasmFunctions.inserir_aluno(fila, aluno1);
            const aluno2 = wasmFunctions.cria_aluno("caio", 345345, "horarfwfio", 2);
            wasmFunctions.inserir_aluno(fila, aluno2);
            console.log("criou aluno2");
            console.log(aluno2);
        }
    }, [wasmFunctions]);

    const criar_fila = async () => {
        const nova_fila = await wasmFunctions.cria_fila_alunos();
        setFila(nova_fila);
    }

    const check_memoria = async() => {
        const memoryBuffer = wasmFunctions.memory.buffer;
        
        // Criando um DataView para acessar o buffer
        const dataView = new DataView(memoryBuffer, fila, 16);
        
        // // Escrevendo valores
        //dataView.setInt32(0, 42, true); // Escreve 42 em little-endian
        // dataView.setInt32(4, 84, true); // Escreve 84 em little-endian
        
        // Lendo valores
        const value1 = dataView.getInt32(0, true); // Lê 42
        // const value2 = dataView.getInt32(4, true); // Lê 84
        console.log("checando memoria");
        
        console.log(value1);
       
        
    }

    const handleOnClick = async() => {
        if (wasmFunctions) {
            


            

            const aluno3 = wasmFunctions.cria_aluno("qedwd", 345345, "horarfwfio", 2);

            wasmFunctions.inserir_aluno(fila, aluno3);
            console.log("criou aluno3");
            console.log(aluno3);
            // aluno = wasmFunctions.cria_aluno("caio", 345345, "horarfwfio", 2);
            // wasmFunctions.inserir_aluno(fila, aluno);

            // console.log("Aluno inserido na fila");

            // console.log(wasmFunctions.numero_na_fila(fila));

            await check_memoria();

        }
    };


    return (
        <StyledTelaInicial>
            <Card title={"Alunos na Fila"} content={102}/>
            {/* {filaAlunos.map((aluno, index) => {<h1></h1>}} */}
            <Botao path={`/fila/${fila}`} onClickFunction={handleOnClick}>Entrar na fila</Botao>
        </StyledTelaInicial>
    );
};

export default TelaInicial;