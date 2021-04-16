// for
// for in
// for of

const array = ['oi', 'amanha', 'sucesso', 'Deus']

/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}
*/

array.forEach(listas=>{
    if(listas.length < 5) console.log(listas) 
})

const pessoa = {
    nome: 'Zeus',
    idade: 3000,
    sexo: 'M'
}

for (const i in pessoa) {
        const element = pessoa[i];
        console.log(element)
}

