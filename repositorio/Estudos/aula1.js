const listaCidades = new Array("Bali", "Bora Bora", "Cartagna", "Maragogi");

console.log("Possíveis destinos:");
console.log(listaCidades);
console.log("=============================");
let idade = Math.floor(Math.random() * 100 + 1);

if (idade > 30) listaCidades.splice(1, 1);
else {
  listaCidades.push("Santorini");
  if (idade < 15) 
  console.log("Precisa de acompanhante.")
  listaCidades.splice(3);
}

console.log(`Idade: ${idade} | Destinos disponíveis para essa idade:  `);
console.log(listaCidades);
