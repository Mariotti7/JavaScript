let salario = Math.floor(Math.random() * 10000 + 100);

console.log("==== INFORME DE RENDIMENTOS ====");

if (salario <= 2600) {
  let imposto = ((salario * 15) / 100).toFixed(2);
  let total = (salario - imposto).toFixed(2);
  console.log("Sua aliquota é de 15%");
  if(imposto > 350.00){
      imposto = 350.00
  }
  console.log("Você pode deduzir até R$ 350,00");
  console.log(
    `Salário bruto R$ ${salario} | Imposto : R$ ${imposto} | Salário líquido: R$ ${total}`
  );
}
if (salario > 2600 && salario < 3750) {
  let imposto = ((salario * 22.5) / 100).toFixed(2);
  let total = (salario - imposto).toFixed(2);
  console.log("Sua aliquota é de 22.5%");
  console.log("Você pode deduzir até R$ 636,00");
  if(imposto > 636.00){
      imposto = 636.00
  }
  console.log(
    `Salário bruto R$ ${salario} | Imposto : R$ ${imposto} | Salário líquido: R$ ${total}`
  );
}
if (salario > 3750) {
  let imposto = ((salario * 29.5) / 100).toFixed(2);
  let total = (salario - imposto).toFixed(2);
  console.log("Sua aliquota é de 29.5%");
  console.log(
    `Salário bruto R$ ${salario} | Imposto : R$ ${imposto} | Salário líquido: R$ ${total}`
  );
}
