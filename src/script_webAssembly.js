
export const FilaFuncoes = async () => {

  const importObject = {
    env: {
        memory: new WebAssembly.Memory({ initial: 256 }),
        consoleLog: (value) => console.log(value)
    }
};

  try {
    const response = await fetch("/funções_fila.wasm");
        
    // 2. Convertemos para ArrayBuffer
    const wasmBuffer = await response.arrayBuffer();
    
    // 3. Instantiate com o buffer
    const wasmModule = await WebAssembly.instantiate(wasmBuffer, importObject);
        
    // Acessamos as funções através de instance.exports
    // const fila = wasmModule.instance.exports._cria_fila_alunos();
    // console.log(wasmModule.instance.exports.cria_fila_alunos());

    return wasmModule.instance.exports;
    

    // //Acessa a função `sum` exportada
    // const {cria_fila_alunos, inserir_aluno, sair_fila, numero_na_fila} = wasmModule.instance.exports;
    // // return wasmModule.instance.exports;\
    // console.log(cria_fila_alunos());

  } catch (error) {
    console.error("Merda, Erro ao carregar o WebAssembly:", error);
  }
}



