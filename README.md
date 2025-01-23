# Fila Virtual UFF

Este é um projeto desenvolvido para a disciplina de Programação Estruturada do curso de Ciência da Computação da Universidade Federal Fluminense (UFF).

## Sobre o Projeto

O projeto implementa uma fila virtual utilizando conceitos de estruturas de dados, especificamente uma fila encadeada, com uma interface web moderna. A implementação da estrutura de dados é feita em C e conectada ao frontend através de WebAssembly.

### Autores

Este projeto foi desenvolvido por:

- Eduardo Rottschaefer Oliveira
- João Victor Machado Sperle

### Funcionalidades

- Criação e gerenciamento de uma fila de alunos
- Visualização da posição atual na fila
- Entrada e saída de alunos da fila
- Interface visual com cards para cada aluno
- Identificação de diferentes campus (Praia Vermelha, Gragoatá I e II)
- Sistema de cores diferenciadas para identificação do usuário na fila

### Tecnologias Utilizadas

- Frontend: React.js com Styled Components
- Backend: C (compilado para WebAssembly)
- WebAssembly para integração C/JavaScript
- Vite como bundler e ferramentas de desenvolvimento

## Estrutura do Projeto

O projeto é dividido em duas partes principais:

1. Implementação da estrutura de dados (C):
   - Fila encadeada
   - Operações básicas (inserção, remoção, consultas)

2. Interface Web (React):
   - Sistema de rotas
   - Componentes estilizados
   - Integração com WebAssembly

## Instalação e Execução

```bash
# Clone o repositório
git clone [url-do-repositório]

# Instale as dependências
npm install

# Execute o projeto
npm run dev