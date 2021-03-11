function Grandpa(){
    this.name = ''
    this.age = 0
}

function Father(){
    Grandpa.call(this)
    this.hierarchy = ''
}

Father.prototype = Object.create(Grandpa.prototype)

function Son(){
    Father.call(this)
    this.line = ''
}

Son.prototype = Object.create(Father.prototype)

const family = new Grandpa

family.name = 'Ragnar Lothbrok'
family.age = 65
family.hierarchy = 'King'
family.line = 'Odin Descendent'

console.table({ family })