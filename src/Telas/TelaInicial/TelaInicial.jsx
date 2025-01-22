import React, { useEffect, useState } from 'react';
import { StyledTelaInicial } from './StyledTelaInicial';
import { Card } from '../../Componentes/Card/Card';
import { Botao } from '../../Componentes/Botao/Botao';
import {Module} from '../../../public/funções_fila';
import { createFilaService } from '../../fila_service';


export const TelaInicial = () => {

    const [filaService, setFilaService] = useState(null);
    const [fila, setFila] = useState(null);
    const [page, setPage] = useState(false);

    useEffect(() => {
        Module().then((instance) => {
            const service = createFilaService(instance);
            setFilaService(service);
            setFila(service.criarFila());
        });
    }, []); //Carrega o arquivo wasm assim que a pagina carrega e incializa a fila

 

    const handleOnClick = () =>{
        console.log("Fila: ", fila);
        
        let aluno = filaService.criarAluno(123, 20)
        console.log("Aluno1: ", aluno)
        filaService.inserirAluno(fila, aluno)

        aluno = filaService.criarAluno(231, 20)
        console.log("Aluno2: ", aluno)
        filaService.inserirAluno(fila, aluno)

        

        // instance.ccall('inserir_aluno', 'void', ['number', 'number'], [fila, aluno])

        // const primeiro = instance.ccall('retorna_primeiro', 'number', ['number'], [fila])

        // console.log("Primeiro: ", primeiro)

        // const matricula = instance.ccall('get_matricula', 'number', ['number'], [primeiro])

        // console.log("Matricula: ", matricula)

        

        // filaService.sairDaFila(fila)

        const posicao = filaService.numeroFila(fila)
        console.log("Posicao: ", posicao)

        setPage(!page)
    }

    return (
        <>
            {page ? (
                <Botao path={`/fila/${fila}`} onClickFunction={handleOnClick}>Entrar na fila</Botao>
            ) : (
                <StyledTelaInicial>
                    <Card title={"Alunos na Fila"} content={102}/>
                    {/* {filaAlunos.map((aluno, index) => {<h1></h1>}} */}
                    <Botao path={`/fila/${fila}`} onClickFunction={handleOnClick}>Entrar na fila</Botao>
                </StyledTelaInicial>
            )}
        </>
    );
};

// export default TelaInicial;