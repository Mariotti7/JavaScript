//Atribuição Via Desestruturação [Array]

let a = 'A';
let b = 'B';
let c = 'C';

//Reatribuindo os valores da variável via desestruturação (array)
[a, b, c] = [1, 2, 3];
//ou
const numeros = [1, 2, 3];
[a, b, c] = numeros;

console.log(a, b, c);

//Outros Exemplos

//Para nao precisar criar várias variáveis você pode criar a desestruturação;
//Você 'pega' pelo indice criando as arrays de desestruturação;
//Você pode utilizar uma TAG chamada 'resto' representada pelos '...resto' para nao precisar criar valores no restante na array;
//...rest = resto  e ...spread = espalhar;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [number1, number2, number3, number4, number5, number6, ...resto] = numbers;

console.log(numbers[number5]);
console.log(resto);

//Acessar lista dentro de lista via indice

//                 0          1          2
//              0  1  2    0  1  2    0  1  2
const lista = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

//Acessando o valor 6 (indice 2 dentro do indice 1) = mais simples
console.log(lista[1][2]);

//Desestruturando de forma mais complexa
//A virgula pula o primeiro indice [0];
//Abrindo colchete para acessar o segundo indice[1] e as virgulas pulam os indices [0 e 1];
//Escolha o valor dentro da chave;
const [,[,,seis]] = lista;
console.log(seis);

