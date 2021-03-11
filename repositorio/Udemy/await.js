const tempo = (min, max) => {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
};

const mensagem = (date, tempo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(date);
    });
  }, tempo);
};


let n = Math.floor((Math.random() * 100) + 1);

async function pegarDados() {
  const dados = {
    usuario: "email@gmail.com",
    id: n,
    token: Math.floor(Math.random() * 999999 + 1),
  };
  try {
    const vouPegar = await mensagem(dados, tempo(3, 7));
    console.log(vouPegar);
  } catch (e) {
    console.log("ATENÇÃO ", new Error(e));
  }
}
pegarDados();
