let Pessoa = function (nome, genero){
    this.nome = nome
    this.genero = genero
    console.log('Pessoa instanciada')
}

Pessoa.prototype.dizerOla = ()=>{
    console.log('Hello!!')
}

let pessoa1 = new Pessoa('Leandro', 'Masculino')

console.log(`Meu nome é ${pessoa1.nome}!`)
pessoa1.dizerOla()

