import React, { useEffect, useState } from 'react';
import { StyledTelaInicial } from './StyledTelaInicial';
import { Card } from '../../Componentes/Card/Card';
import { Botao } from '../../Componentes/Botao/Botao';
import {Module} from '../../../public/funções_fila';
import { createFilaService } from '../../fila_service';
import { StyledFilaPage } from '../FilaPage/StyledFilaPage';
import { FilaCard } from '../../Componentes/FilaCard/FilaCard';


export const TelaInicial = () => {

    const [filaService, setFilaService] = useState(null);
    const [fila, setFila] = useState(null);
    const [page, setPage] = useState(false);
    const [filaAlunos, setFilaAlunos] = useState([]);
    const [posicao, setPosicao] = useState(11);
    
    

    useEffect(() => {
        Module().then((instance) => {
            const service = createFilaService(instance);
            setFilaService(service);
            setFila(service.criarFila());
    })
    }, []); //Carrega o arquivo wasm assim que a pagina carrega e incializa a fila

    useEffect(() => {   
        const alunosIniciais = [{
            nome: "Ana",
            matricula: 101,
            horario_entrada: "08:00:00",
            ponteiro: null,
            campus: 1
        },
        {
            nome: "Bruno",
            matricula: 102,
            horario_entrada: "08:05:00",
            ponteiro: null,
            campus: 2
        },
        {
            nome: "Carlos",
            matricula: 103,
            horario_entrada: "08:10:00",
            ponteiro: null,
            campus: 3
        },
        {
            nome: "Daniela",
            matricula: 104,
            horario_entrada: "08:15:00",
            ponteiro: null,
            campus: 1
        },
        {
            nome: "Eduardo",
            matricula: 105,
            horario_entrada: "08:20:00",
            ponteiro: null,
            campus: 2
        },
        {
            nome: "Fernanda",
            matricula: 106,
            horario_entrada: "08:25:00",
            ponteiro: null,
            campus: 3
        },
        {
            nome: "Gabriel",
            matricula: 107,
            horario_entrada: "08:30:00",
            ponteiro: null,
            campus: 1
        },
        {
            nome: "Helena",
            matricula: 108,
            horario_entrada: "08:35:00",
            ponteiro: null,
            campus: 2
        },
        {
            nome: "Igor",
            matricula: 109,
            horario_entrada: "08:40:00",
            ponteiro: null,
            campus: 3
        },
        {
            nome: "Juliana",
            matricula: 110,
            horario_entrada: "08:45:00",
            ponteiro: null,
            campus: 1
        }]

        if(filaService){

            alunosIniciais.forEach((aluno) => {
                const aluno_ptr = filaService.criarAluno(aluno.matricula, 20);
                aluno.ponteiro = aluno_ptr;
                filaService.inserirAluno(fila, aluno_ptr);
            
        });

        setFilaAlunos(alunosIniciais)}
    }, [filaService]) //Após a fila ser criada, insere os alunos iniciais
 
    useEffect(() => {
        if (!filaService || !fila) return;
    
        const interval = setInterval(() => {    
            // Add new aluno
                const randomMatricula = Math.floor(Math.random() * 1000) + 111;
                const novoAluno_ptr = filaService.criarAluno(randomMatricula, 20);
                filaService.inserirAluno(fila, novoAluno_ptr);
    
                const novoAluno = {
                    nome: `Aluno ${randomMatricula}`,
                    matricula: randomMatricula,
                    horario_entrada: new Date().toLocaleTimeString(),
                    ponteiro: novoAluno_ptr,
                    campus: Math.floor(Math.random() * 3) + 1
                };
    
                setFilaAlunos(prev => [...prev, novoAluno]);
           
                // Remove first aluno
                if (filaAlunos.length > 0) {
                    filaService.sairDaFila(fila);
                    setFilaAlunos(prev => prev.slice(1));
                }

                if(posicao > 0){
                    setPosicao(posicao - 1)
                }
        }, 5000);
    
        return () => clearInterval(interval);
    }, [filaService, fila, filaAlunos]);

    const handleEntrarNaFila = () =>{
        console.log("Fila: ", fila);
        
        let aluno = filaService.criarAluno(123, 20)
        console.log("Aluno: ", aluno)
        filaService.inserirAluno(fila, aluno)

        const aluno_obj = {
            nome: "Você",
            matricula: 123,
            horario_entrada: new Date().toLocaleTimeString(),
            ponteiro: aluno,
            campus: 1
        }

        setPosicao(filaService.numeroFila(fila))

        setFilaAlunos([...filaAlunos, aluno_obj])

        const posicao = filaService.numeroFila(fila)
        console.log("Posicao: ", posicao)

        setPage(!page)
    }

    const handleSairDaFila = () => {
        filaService.sairDaFila(fila)
        setPage(!page)
        const posicao = filaService.numeroFila(fila)
        console.log("Posicao: ", posicao)

    }

    return (
        <>
            {page ? (
                <StyledFilaPage>
                    {filaAlunos.map((aluno, index) => {
                        return (
                            
                            <FilaCard nome={aluno.nome} matricula={aluno.matricula} horarioChegada={aluno.horario_entrada} ponteiro={aluno.ponteiro}
                            campus={aluno.campus}
                            key={index}/>
                        )
                    })}
                    <Card title={"Sua posição"} content={posicao}/>
                    <Botao path={''} onClickFunction={handleSairDaFila}>Sair da fila</Botao>
                </StyledFilaPage>

            ) : (

                <StyledTelaInicial>
                    <Card title={"Alunos na Fila"} content={11}/>
                    {/* {filaAlunos.map((aluno, index) => {<h1></h1>}} */}
                    <Botao path={`/fila/${fila}`} onClickFunction={handleEntrarNaFila}>Entrar na fila</Botao>
                </StyledTelaInicial>
            )}
        </>
    );
};

// export default TelaInicial;