#include <stdlib.h>

typedef struct dados{
    char nome[50];
    int matricula;
    char horario[50];
    int campus;// 0 = Gragoata.1    1 = Gragoata.2    2 = Praia_vermelha
    struct dados* prox;
}Info_aluno;


typedef struct aluno{
    Info_aluno* primeiro;
    Info_aluno* ultimo;
}Fila_alunos;

    
Fila_alunos* cria_fila_alunos(){
    Fila_alunos* l = malloc(sizeof(Fila_alunos));
    if(l == NULL){
        exit(1);
    }


    l->primeiro = NULL;
    l->ultimo = NULL;

    return l;
}

void inserir_aluno(Fila_alunos* l){
    Info_aluno* aluno = malloc(sizeof(Info_aluno));
    if(aluno == NULL){
        exit(1);
    }

    aluno->prox = NULL;

    if(l->primeiro == NULL){
        l->primeiro = aluno;
        l->ultimo = aluno;
    }
    else{
        l->ultimo->prox = aluno;
        l->ultimo = aluno;
    }
}

void sair_fila(Fila_alunos* l){
    if(l->primeiro == l->ultimo){
        l->primeiro = NULL;
        l->ultimo = NULL;
    }
    Info_aluno* temp = l->primeiro;
    l->primeiro = l->primeiro->prox;

    if(l->primeiro == NULL){
        l->ultimo = NULL;
    }
    free(temp);
}

int numero_na_fila(Fila_alunos* l){
    int posicao = 0;
    Info_aluno* temp = l->primeiro;
    while(temp != NULL){
        posicao++;
        temp = temp->prox;
    }
    return posicao;
}