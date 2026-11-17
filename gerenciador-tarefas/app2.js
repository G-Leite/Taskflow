function  mostrarMenu(){
console.log("1 - Adicionar");
console.log("2 - Listar");
console.log("3 - Concluir");
console.log("4 - Remover");
console.log("0 - Sair");
}

const processar = (opcao) => {
    switch (opcao){
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
        default:
            console.log("Opção Invalida")
            break; 

    }

}

mostrarMenu();
processar("2");
processar("9");