// Inicializando a classe stack (pilha)
class Stack {
    constructor() {
        this.items = [];
    }
    
    

    /* O método construtor é responsável por configurar os objetos quando são criados. 
    A expressão `this.items = []` indica que o atributo `items` de cada objeto específico 
    será inicializado como um array vazio.
    */

    push(element){
        this.items.push(element);
    }
    /* O metodo push pertence a classe stack(pilha), onde ele é
    responsável por "Empurrar" (push) os elementos (element) para 
    a pilha 
    */

    pop(){
        if (this.items.length === 0){
            return "underflow";
        }
        return this.items.pop();
    }
    /* O metodo pop é resposável por remover o elemento que está no topo da pilha,
    onde primeiramente há uma verificação se a lista está vazia,
    com o retorno do termo underflow se a condição for verdadeira.
    O termo underflow é utilizado para representar quando o valor está abaixo do valor mínimo
    Caso a condição do if não seja verdadeira, o elemento é removido e é retornado
    */

    peek(){
        if (this.items.length === 0){
            return "underflow";
        }
        return this.items[this.items.length -1];
    }
    /* O metodo peek é responsável por retornar o valor no topo da pilha sem altera-lo,
    caso a lista nao esteja vazia, o metodo acessa o valor que está na ultima posicão,
    ele utiliza o tamanho da lista -1 pois listas em js iniciam com indice 0
    */

    printStack(){
        return this.items.join(",");
    }
    /* O metodo printStack é responsavel por printar a pilha como string,
    utilizando o metodo join para unir os elementos e utilizando o espaço em branco
    para a separação
    */    
}
let pilha = new Stack();
pilha.push(10);
pilha.push(20);
pilha.push(30);
console.log("A pilha original é: " + pilha.printStack());
console.log("O valor que foi removido do topo da pilha foi: " + pilha.pop());
console.log("O valor que está no topo da pilha é: " + pilha.peek());
    



