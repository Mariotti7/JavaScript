// AULA DE FOR IN -> lê os indices ou chaves do objeto
const frutas = ['pera', 'maça', 'uva'];

//for (let i = 0; i < frutas.length; i++){
//   console.log(frutas[i]);
//}

//Acessando indices da lista
for(let i in frutas){
    console.log(i);
}

//Acessando os itens da lista
for (let i in frutas){
    console.log(frutas[i]);
}

//Outro exemplo
const pessoa = {
    nome:'Leandro',
    sobrenome:'Mariotti',
    idade:29
};
//Exemplos de como acessar itens do objeto
console.log(pessoa.sobrenome);
console.log(pessoa ['nome']);

for(let lista in pessoa){
    console.log(lista, pessoa[lista]);//Posso colocar a variavel antes para que apareça o valor da chave
}


const aluno = {
    nome: "Heitor",
    sobrenome: "Mariotti",
    peso: 90,
    sexo: 'M',
    calorias: 
    function (){
        return `Consuma diariamente pelo menos ${aluno.peso * 24.2} kcal.`
    }
}

for(let itens in aluno){
    console.log(aluno.calorias());
}