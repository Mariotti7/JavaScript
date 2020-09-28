//MAIS DIFERENÇAS ENTRE VAR e LET/CONST

//LET tem escopo de bloco, ou seja, dentro de chaves = bloco {.....}
//VAR só tem escopo de função
// Ao escrever console.log(sobrenome) e depois declarar var sobrenome = 'Mariotti'
// Acontece o Hoisting e o valor retorna indefinido
//Ao realizar o mesmo procedimento com let dá erro

const verdadeira = true;
let nome = 'Leandro';
var nome2 = 'Leandro';
var nome2 = 'Mariotti'; // pode redeclarar

//Bloco Aninhado
if(verdadeira){
    let nome = 'Heitor'; // daria erro ao redeclarar a mesma variável fora do bloco
    console.log(nome, nome2);

if(verdadeira){
    let nome = 'Leandro';
    console.log(nome, nome2);
}
}

function falaOi(){
    let nome = 'Imperador';
    console.log(`${nome} diz olá!`)
}
falaOi();

