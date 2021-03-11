// function createPhoneNumber(numbers){
//     numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
//      let pn = numbers.join('')
//      return `(${pn.slice(0,3)}) ${pn.slice(3,6)}-${pn.slice(6)}`
//   }
//  console.log(createPhoneNumber())

function createPhoneNumber(numbers) {
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    let num = '(xxx) xxx-xxxx';

    numbers.forEach(item => {
        num = num.replace('x', item)
    });
    return num
}
console.log(createPhoneNumber())

// ============================================================
const foo = { nome: 'Heitor', sobrenome: 'Mariotti', idade: 6 }
const boo = { nome: 'Leandro', sobrenome: 'Mariotti', idade: 30 }
const too = { nome: 'Adonis', sobrenome: 'Mariotti', idade: 1 }

console.log({ foo, boo, too }) // vai escrever em fora de objeto
console.table([foo, boo, too]) // vai escrever em forma de tabela
console.log('%c My Friends', 'color: orange; font-weight: bold') // no console fica laranja

const gorilla = {
    name: 'Donk',
    legs: 2,
    shell: true,
    type: 'primate',
    meal: 150,
    diet: 'bananas and meat'
}
function feed({ name, meal, diet }) {
    return `Feed ${name} ${meal} kilos of ${diet}`
}
console.log(feed(gorilla))

const godzilla = {
    name: 'Frank',
    size: 'monster',
    skills: ['energy blast', 'super strenght'],
    age: 350
}
const { name, size, skills } = godzilla
bio = `${name} is a ${size} skilled in ${skills.join(' & ')}`
console.log(bio)

// spreads
const charizard = { name: 'Charizard' }
const stats = { hp: 85, attack: 99, defense: 68 }

const level0 = { ...charizard, ...stats }
const level1 = { ...charizard, hp: 86 }

// arrays
let pokemon = ['Blastoise', 'Bulbassauro', 'Mewtwo']

pokemon = [...pokemon, 'Arcanine', 'Vulpix', 'Hitmonlee']

console.table(pokemon)

// loop
const orders = [500, 30, 99, 15, 223]

// reduce 
const total = orders.reduce((acc, cur) => acc + cur)

// map 
const withTax = orders.map(v => v * 1.1)

// filter
const highValue = orders.filter(v => v > 100)

console.log({ orders, total, withTax, highValue })

// await async
const random = ()=> {
    return Promise.resolve(Math.floor((Math.random() * 100) + 1))
}

const sumRandomAsyncNums = async()=>{
    const first = await random()
    const second = await random()
    const third = await random()

    console.log(`Result: ${ first.toFixed(2) + second.toFixed(2) + third.toFixed(2) }`)
}

console.log(sumRandomAsyncNums())

