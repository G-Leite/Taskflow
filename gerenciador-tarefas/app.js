console.log("iniciando o gerenciador de tarefas");

let opcao = 4;

const titulo = "aaaa";
const mostra_titulo = titulo.trim() ? "Titulo ok" : "Titulo vazio"
//console.log(mostra_titulo)


//escolhe a função
while (opcao !== 0){
    switch (opcao) {
        case 1:
            console.log("Adicionar tarefa")
            break;
        case 2:
            console.log("Listar tarefas")
            break;
        case 3:
            console.log("Concluir tarefa")
            break;
        case 4:
            console.log("Remover tarefa")
            break;
        default:
            console.log("Opção Invalida")
            break; 
    }
    opcao--;
}

let tentativas = 0;

do{
    console.log("mostrando a tela");
    tentativas++;
} while (tentativas < 3);

for (let tarefa = 1; tarefa <= 5; tarefa++){
    console.log("Numero " + tarefa)
}