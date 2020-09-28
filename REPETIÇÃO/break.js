//AULA DE BREAK e CONTINUE

//Continue pula para a próxima iteração
//Break interrompe o laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros){//Fazendo com of
    //Se fosse com in teria de declarar outra variavel:
    //for (let i in numeros){ let numero = numero[i]}
    //Se fosse com o for classico:
    //for(let i = 0; i < numeros.length; i++){let numero = numero[i]}

    if(numero === 2){
        console.log("Pulei o numero 2");//Só pra mostrar o que faz
    continue;//Sempre que o laço for iniciado e chegar no continue, haverá um pulo para a proxima iteração
    }

    if(numero === 7){
        console.log("Interrompeu no 7");//Só para mostrar o que faz
        break; // Interrompe o laço
    }
    console.log(numero);
}