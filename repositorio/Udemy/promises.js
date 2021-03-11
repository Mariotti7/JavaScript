// PROMISES -> uma promessa é um objeto retornado ao qual você anexa(then) callbacks, em vez de passar callbacks para uma função.

function aleatorio(min, max){ //método de tempo aleatório 
    max *= 1000
    min *= 1000
    let time = Math.floor((Math.random() * (max - min)) + max )
    return time; 
}

function esperaAi(msg, tempo){ // função que tem como atributos uma mensagem e um tempo para executar
    return new Promise((resolve, reject) =>{ // Promessa se vai resolver ou rejeitar 
        setTimeout(()=>{ // setando o tempo que vai executar
            resolve(msg) // menssagem
        }, tempo) // tempo
    })
}

//Promisses
esperaAi('Olá, DevOps!!', aleatorio(1,3)).then(resposta =>{ //no 'then' vc anexa uma função que pode ou não ter callback
    console.log(resposta)
    return esperaAi('Delete sem Where!!', aleatorio(1,3))
})
.then(resposta =>{
    console.log(resposta)
    return esperaAi('Vamos codar!!', aleatorio(1,3))
}).then(resposta =>{
    console.log(resposta)
})
.catch() // tratativa de erro
