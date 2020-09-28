//AULA DE ESTRUTURA DE REPETIÇÃO => FOR (CLASSICO)

//Criar um laço de repetição para não precisar repetir a linha varias vezes;
console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');

// Estrutura:
// Dentro dos parenteses (VARIAVEL; CONDIÇÃO ; INCREMENTO/DECREMENTO);
//Entre chaves o console.log;
for(let i = 0; i <= 5; i++ ){
    console.log("Linha", i);
}

//Incremento: Do menor para o maior;
//Você pode incrementar escolhendo de quantos em quantos você quer pular;
for(let c = 100; c <= 500; c+= 100 ){//pulando de 100 em 100
    console.log("Linha", c);
}

//Decremento: Do maior para o menor;
//Você pode decrementar escolhendo de quantos em quantos você quer pular
for(let d = 600; d >= 400; d-= 100 ){
    console.log("Linha", d);
}

//Checando se o número é par
//Utilizando Condição Ternaria para denominar os pares e impares;
for(let a = 0; a <= 15; a++ ){
    const par = a % 2 === 0? 'par': 'impar';
    console.log(a, par);
}

//Utilizando em ARRAY
//No indice (0,1,2) você irá escolher a tag length na condição para parar no tamanho do array
//Se colocar menor igual (<=) vai aparecer valor indefinido;
//No console coloque a lista + a estrutura de repetição para aparecer os nomes 
const frutas = ['Jambo', 'Tamara', 'Uva'];
for(f = 0; f < frutas.length; f++){
    console.log(frutas[f]);
}