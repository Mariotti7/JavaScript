//AULA DE WHILE E DO WHILE - REPETIÇÃO

function random(min, max){//Calculo para max e min
    const r = Math.random()* (max - min) + min; //Escolhendo numeros aleatorios dentro do calculo
    return Math.floor(r); // Retornando a consta r sem as casas decimais
    
}
const min = 1;//determinando o valor minimo para rodar
const max = 50;//determinando o valor max para rodar
let rand = random(min, max); //Escolhendo o minimo e o maximo

//Criando uma estrutura de laço para determinar quando parar

while (rand !== 10){//Enquanto for diferente de 10 execute o laço abaixo
    rand = random(min, max); // Executando a variável
    console.log(rand);
}
console.log('######');

do{//Ele vai executar apenas 1 numero e esse vai retornar como a variavel rand
    rand = random(min, max);
    console.log(rand);
}while(rand ==! 10);