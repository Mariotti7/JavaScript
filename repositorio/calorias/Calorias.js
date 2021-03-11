class MeuPeso {
    constructor(peso) {
        this.peso = peso
    }
}

class valorMetabolico extends MeuPeso {
    constructor(calorias) {
        super(calorias)
        const valorMetabolicoRepousoMasculino = 24.2
        this.calorias = (calorias * valorMetabolicoRepousoMasculino).toFixed(2)
    }
    calProteina(peso) {
        this.peso = peso
        const gramaDeProteina = 2
        const necessidadeProteica = this.peso * gramaDeProteina
        const caloriaGramaProteina = 4
        const calorias = necessidadeProteica * caloriaGramaProteina
        return `PROTEINAS: ${necessidadeProteica}g | ${calorias.toFixed(2)} kcal `
    }
    calCarboidrato(peso) {
        this.peso = peso
        const gramaDeCarboidrato = 7
        const necessidadeProteica = this.peso * gramaDeCarboidrato
        const caloriaGramaCarboidrato = 4
        const calorias = necessidadeProteica * caloriaGramaCarboidrato
        return `CARBOIDRATOS: ${necessidadeProteica}g | ${calorias.toFixed(2)} kcal `
    }
    calGordura(peso) {
        this.peso = peso
        const gramaDeGordura = 0.6
        const necessidadeProteica = this.peso * gramaDeGordura
        const caloriaGramaGordura = 9
        const calorias = necessidadeProteica * caloriaGramaGordura
        return `GORDURAS: ${necessidadeProteica}g | ${calorias.toFixed(2)} kcal `
    }
    qtdAgua(peso) {
        const quantidadeAgua = 55
        this.peso = peso * quantidadeAgua
        return `ÁGUA: ${this.peso} ml`
    }
    totalCalorias(peso) {
        this.peso = peso
        const total = (((this.peso * 2) * 4) + ((this.peso * 7) * 4) + ((this.peso * 0.6) * 9)).toFixed(2)
        return `TOTAL DE CALORIAS: ${total} kcal`
    }
}
const meuPesoCorporal = 90
const caloriasDiarias = new valorMetabolico(meuPesoCorporal)

console.log('=== TABELA METABÓLICA ===')
console.log('Mínimo diário: ', caloriasDiarias)
console.log('============================')
console.log(caloriasDiarias.calProteina(meuPesoCorporal))
console.log(caloriasDiarias.calCarboidrato(meuPesoCorporal))
console.log(caloriasDiarias.calGordura(meuPesoCorporal))
console.log('============================')
console.log(caloriasDiarias.totalCalorias(meuPesoCorporal))
console.log(caloriasDiarias.qtdAgua(meuPesoCorporal))