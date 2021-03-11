// Como se fosse um loop

function recursiva(max){ // setando um atributo sobre o valor maximo
    console.log(max)     // leia esse numero
    if(max >= 10) return; // se esse numero for maior ou igual pare(return)
    max++                 // some mais um
    recursiva(max)        // leia novamente até bater na condição
}

recursiva(0)              