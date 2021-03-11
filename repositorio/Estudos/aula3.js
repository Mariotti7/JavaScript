const cidades = ["Florianópolis", "Maragogi", "Bonito", "Capitólio"];

let passagemComprada = false;
const destino = "Maragogi";
let contador = 0;

while (contador < 4) {
  if (cidades[contador] == destino) {
    passagemComprada = true;
    console.log(`Eu vou para ${destino}!!`);
    break
  }else{
      console.log('Destino não existe')
  }
  contador++;
}
