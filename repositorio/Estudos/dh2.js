var alunos = [170, 159, 151, 187, 156, 191, 165, 154, 167, 169, 171, 170, 160]

var grupoA = []
var grupoB = []
var grupoC = []

function cadimia(aluno) {

    for (var i = 0; i < alunos.length; i++) {
        if (alunos[i] >= 150 && alunos[i] <= 159) grupoA.push(alunos[i])

        else if (alunos[i] >= 160 && alunos[i] <= 169) grupoB.push(alunos[i])

        else grupoC.push(alunos[i])

    }
}
console.log(cadimia())

var placas = [
    'RXB-2525', 'AKX-3333', 'ORO-7142', 'RXB-2525', 'AKX-3333', 'ORO-7142',
    'AKX-3333', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142', 'AKX-3333', 'ORO-7142', 'ORO-7142',
    'ORO-7142', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'ORO-7142', 'ORO-7142',
    'AKX-3333', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
    'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'RXB-2525'
]

function calcularNumeroDeEntradas(placa) {
    var contador = 0
    for (var i = 0; i < placas.length; i++) {
        if (placas[i] == placa) {
            contador++
        }
        return contador
    }
}
function calcularValorDevido(placa) {
    var entradas = calcularNumeroDeEntradas(placa)
    if (entradas <= 20) return entradas + 10
    else if (entradas > 21) return entradas + 5
}

function calculaGostos(notas) {

    notas = [0, 1, 2, 3, 4, 5]
    var nNaoGostaram = 0
    var nMediano = 0
    var nGostaram = 0

    for (var i = 0; i < notas.length; i++) {
        if (notas[i] == 0 || notas[i] == 1) nNaoGostaram[i]++
        else if (notas[i] == 2 || notas[i] == 3) nMediano[i]++
        else if (notas[i] == 4 || notas[i] == 5) nGostaram[i]++
    }
    return [nNaoGostaram, nMediano, nGostaram]
}
console.log(calculaGostos([1, 1, 3, 3, 4, 5]))


var personagens = ["Hermione", "Trinity", "Leia"]
var filmes = ["Harry Potter", "Matrix", "Star wars"]
var lancamentos = [2001, 1999, 1977]
var id = 3

function filme(personagens, filmes, lancamentos, id) {

    if ((id > 0) && (id < filmes.length)) {
        var i = id - 1
        return personagens[i] + 'é um personagem do filme' + filmes[i] + 'que estreou no cinema em' + lancamentos[i] + '.'
    }
}
console.log(filme(personagens, filmes, lancamentos, id))

function buscarDivisivelPor(array, num) {
    // Escreva abaixo o seu código:
    for (var i = 0; i < array.length; i++) {
        if ((array[i] % num) == 0 && array[i] !== 0) return array[i]

    }
    return 'Nenhum número válido encontrado!'
}

console.log(buscarDivisivelPor([4,2,3,4,5], 2))

function repete(valor,qtd){
    //
    for(var i = 0; i < qtd; i++){
        console.log(valor)
    }
   }
console.log(repete('Ola', 10))

var filme = ['Harry bosta']
var titulo = ['E a pedra de crack', 'E os baguio de Ascambal', 'E a camara de pula pula', 'E o principe da xuxa']

function nomeDosFilmes(filme, titulo){
    var newArray = []
    for(var i = 0; i < titulo.length; i++){
        newArray.push(filme + ' ' + titulo[i])
    }
    return newArray
}
console.log(nomeDosFilmes(filme, titulo))


function gastoCaminhada(passos){
    var total = 0
    for(var i = 0; i < passos; i++){
        total += i * 2
    }
    return total
}

console.log(gastoCaminhada(30))

function dobro(a,b,c){
    if(a+b <= c) console.log('Não é maior')
    else console.log('É maior')
}

console.log(dobro(2,3,4))