console.log("iniciando o gerenciador de tarefas");

const opcao = "";

const titulo = "                 ";
const mostra_titulo = titulo.trim() ? "Titulo ok" : "Titulo vazio"
console.log(mostra_titulo)

//escolhe a função
switch (opcao) {
    case "1":
        console.log("Adicionar tarefa")
        break;
    case "2":
        console.log("Listar tarefas")
        break;
    case "3":
        console.log("Concluir tarefa")
        break;
    case "4":
        console.log("Remover tarefa")
        break;
    case "0":
        console.log("Sair")
        break;
    default:
        console.log("Opção Invalida")


}