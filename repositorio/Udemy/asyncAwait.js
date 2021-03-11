// Async | Await
// permite que usemos os promisses de forma sincrona

const tempo = (min, max) => {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
};

const mensagens = (msg, tempo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("CAÍ NO ERRO");
        return;
      }
      resolve(msg.toUpperCase() + " Deu certo!");
      return;
    }, tempo);
  });
};

async function executa() {
    try{
        const fase1 = await mensagens("Olá DEEV!!", tempo(1, 3));
        console.log(fase1);
      
        const fase2 = await mensagens(3, tempo(1, 3));
        console.log(fase2);
      
        const fase3 = await mensagens("Olá DEEEEEEEEV!!", tempo(1, 3));
        console.log(fase3);
      
        console.log(`O que você disse?? ${fase3}`);
    }catch(e){
        console.log(e)
    }
 
}
executa();

/*
mensagens('Olá DEEV!!', tempo(1,3)).then((resposta)=>{
    console.log(resposta)
    return mensagens('Olá, DEEEEEEEEV!!', tempo(1,3))
}).then((resposta)=>{
    console.log(resposta)
})
*/
