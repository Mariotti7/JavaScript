var cartela = [8, 13, 18, 22, 42, 49]
var numeroSorteado = 42

for (var i = 0; i < cartela.length; i++) {
    if (cartela[i] == numeroSorteado) {
        console.log('Encontrei o número!')
        break
    }
}

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
var contador = 0

for (var i = 0; i < numeros.length; i++) {
    if ((numeros[i] % 2) == 0) {
        contador++
    } else {
        continue
    }
    console.log(contador)
}

var familia = ["Joana", "Felipe", "Gabriela", "Carlos", "Pedro", "Bruno"]

for (var i = 0; i < familia.length; i++) {
    if (familia[i] == 'Pedro') {
        console.log(familia[i] + ' Sousa')
        continue
    }
    console.log(familia[i] + ' Macedo')

}


var baralho = ["Ás", "Dama", "Rei", "Valete"]

for (var i = 0; i < baralho.length; i++) {
    if (baralho[i] == 'Rei') {
        console.log('Encontrei o Rei!')
        break
    }
}


function listarProdutos() {
    var lista = ['Leite', 'tomate', 'Biscoito', 'Tapioca']

    for (var i = 0; i < lista.length; i++) {
        console.log(lista[i])
    }
}

listarProdutos()

function cartaoDeVisitas() {
    var nome = 'Leandro'
    var sobrenome = 'Mariotti'
    console.log(nome + ' ' + sobrenome)
}
cartaoDeVisitas()

function tabuadaDoSete() {
    var contador = 7
    for (var i = 1; i < 11; i++) {
        console.log(contador + ' x ' + [i] + ' = ' + (contador * [i]))
    }
}
tabuadaDoSete()

function menorNumero(numA, numB) {
    return Math.min(numA, numB)
}
console.log(menorNumero(8, 2))

function calculaValorDevido(pesoDaRoupaSuja) {
    return (pesoDaRoupaSuja * 3) + 10
}
console.log(calculaValorDevido(5))

function estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes) {
    nomeDoAluno = 'Juca'
    nomesDosPresentes = ['Jabulani', 'Xerxes', 'Macalé', 'Adoniran', 'Juca', 'Menelau']
    if (nomesDosPresentes.indexOf('Juca')) return true
    else return false
}
console.log(estavaPresenteNaAula())

function transformaParaMaiusculo(palavras) {
    var lista = []
    for (var i = 0; i < palavras.length; i++) {
        lista.push(palavras[i].toUpperCase())
    }
    return lista
}
console.log(transformaParaMaiusculo(['eu', 'sou', 'programador', 'salve', 'digital', 'house']))

function gerarDezenas() {
    var dezenas = []
    for (var i = 0; i < 6; i++) {
        dezenas.push(Math.round(Math.random() * 60))
    }
    return dezenas
}
console.log(gerarDezenas())

function maxmin(a, b, c, d, e) {

    var array = Array()

    for (i = 0; i < maxmin.length; ++i) {

        Math.min(maxmin[i])

        Math.max(maxmin[i])

    }
    return array
}


var moradores = [
    "Fulano de Tal",
    "Beltrano da Cia",
    "Viajante do Tempo",
    "Morador da Lua",
    "Marciano Azul",
    "Et da Eslováquia",
    "Jedi do Lado Cinza da Força",
    "Baby Yoda Amarelo"
]

for (var i = 0; i < moradores.length; i++) {
    if ((i % 2) === 0) {
        console.log('O morador ' + moradores[i] + ' pode usar o elevador')
    }
}


var usuario1 = ['Et da Estônia', 17, 170]
var usuario2 = ['Pessoa do Pântano', 39, 198]
var usuario3 = ['Homem da Lua Virada', 21, 149]
var usuario4 = ['Pequena Paulistana', 18, 171]
var usuario5 = ['Menino da Porteira', 13, 142]

function maiorAlto(usuario){

    if(usuario[1]>= 18 && usuario[2] >= 170) return true
    else return false
}
console.log(maiorAlto(usuario1))

