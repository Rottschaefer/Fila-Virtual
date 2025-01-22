export const createFilaService = (instance) => {
    return {
      criarFila: () => {
        return instance.ccall('cria_fila_alunos', 'number', [], []);
      },
      
      criarAluno: (matricula, idade) => {
        return instance.ccall('cria_aluno', 'number', ['number', 'number'], [matricula, idade]);
      },
      
      inserirAluno: (fila, aluno) => {
        return instance.ccall('inserir_aluno', 'void', ['number', 'number'], [fila, aluno]);
      },
  
      getPrimeiroAluno: (fila) => {
        return instance.ccall('retorna_primeiro', 'number', ['number'], [fila]);
      },
  
      getMatricula: (aluno) => {
        return instance.ccall('get_matricula', 'number', ['number'], [aluno]);
      },    

    numeroFila: (fila) => {
        return instance.ccall('numero_na_fila', 'number', ['number'], [fila]);
    },

    sairDaFila: (fila) => {
        return instance.ccall('sair_fila', 'void', ['number'], [fila]);
    }
  }
}