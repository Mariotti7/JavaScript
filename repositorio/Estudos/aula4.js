const cars = ["Lamborghini", "Aston Martin", "Mercedes GT", "Masserati", "BMW"];

let meuCarro = "BMW";

console.log(`Lista de carros na garagem:`);
console.log(cars);
console.log("==========================");

for (let i = 0; i < 5; i++) {
  if (cars[i] == meuCarro) {
    console.log(`Esse é o meu carro: ${meuCarro}`);
    break;
  } else {
    console.log("Carro não encontrado");
  }
}


var listaDeLucro = [100, 30, 300, -10, 600, 10]
var lucroTotal = 0;

for(var i = 0; i < listaDeLucro.length ; i++){
  lucroTotal = lucroTotal + listaDeLucro[i] 
  
}

console.log('Valor total: ' + lucroTotal)

var listaDeGanhos = [10, 30, -10, -5, -1, 40]
var totalNegativos = 0

for(var i = 0; i < listaDeGanhos.length; i++){

 if(listaDeGanhos[i]<0){
  totalNegativos = totalNegativos + 1
 }
}
console.log(totalNegativos)


var listaDeFrutas = [ "Uva", "Banana",  "Manga", "Cajá", "Pinha"]
var busca = "Cajá"

for(var i = 0; i<listaDeFrutas.length; i++){
  if(listaDeFrutas[i] === busca){
    console.log(`Sim, temos a fruta ${busca} disponível`)
  }else console.log('tem essa porra nao')
}

