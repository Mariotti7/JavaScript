const tempo = (min, max)=>{
    min *= 1000
    max *= 1000
    return Math.floor((Math.random() * (max- min) + min));
}

const mensagens = (msg, tempo) =>{
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject (Error('Tem erro aee').message)
        setTimeout(()=>{
            resolve(msg)
        },tempo)
    })
} 
//Promise.all  | Promise.race  |  Promise.resolve  | Promise.reject]

const promises = [
    'Faça: ',
    mensagens('Um deploy', tempo(1,3)),
    mensagens('Um array', tempo(1,3)),
    mensagens('Um refatoramento', tempo(1,3)),
    mensagens('Um async await' , tempo(1,3))
]

//Promise resolve todos
Promise.all(promises).then((valor)=>{ 
    console.log(valor)
})
.catch((e)=>{
    console.log('ERRO', e)
})

// Promise resolve o mais rápido
Promise.race(promises).then((valor)=>{
    console.log(valor)
})
.catch((e)=>{
    console.log("Olha o ERRO", e)
})