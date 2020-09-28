//AULA FOR OF

const nome = ['Mariotti', 'Imperador', 'SemiDeus'];

//Iterar (tem indice)
//for(let i = 0; i < nome.length; i ++ ){
//    console.log(nome[i]);
//}

// for in > retorna indice
//for ( let i in nome){
//    console.log(nome[i]);
//}

//for of // retorna os valores 
for (let valor of nome){ 
    console.log(valor);
}

console.log('####')

//Acessando, via função, o valor dos elementos 
nome.forEach(function(valor, indice, array){ // executando valor + indice + array (opcional nomenclar)
    console.log(valor, indice, array);  
});

const lista = ['S', 'e', 'i', 'o', 's'];

for (let i of lista){
    console.log(i);
}
lista.forEach(function(cu, cuzin, cuzao, cuu, i){
    console.log(cu, cuzin, cuzao, cuu, i);
});