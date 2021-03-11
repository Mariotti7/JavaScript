const tempo = (min, max)=>{
    min *= 1000
    max *= 1000
    return Math.floor((Math.random() * (max- min) + min));
}

const mensagens = (msg, tempo) =>{
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject ('BAD VALUE')
        setTimeout(()=>{
            resolve(msg)
        },tempo)
    })
}

mensagens('Aperta ALT + F4', tempo(1,4)).then( resposta =>{
    console.log(resposta)
    return mensagens('Olha no Stackover flow!!', tempo(1,5))
}).then(resposta =>{
    console.log(resposta)
    return mensagens('Meu primeiro projeto: "Hello World"!',tempo(1,5))
}).then(resposta =>{
    console.log(resposta)
    return mensagens("Sou hacker demais!", tempo(1,5))
}).then(resposta =>{
    console.log(resposta)
})
.catch(e =>{ 
    console.log('ERRO', e)
})