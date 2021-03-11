function House(){
    this.family = ''
    this.origin = ''
}

function Family(){
    House.call(this)
    this.boss = ''
    this.role = ''
}

Family.prototype = Object.create(House.prototype)

function Business(){
    Family.call(this)
    this.business = ''
}

Business.prototype = Object.create(Family.prototype)

function Domain(){
    Family.call(this)
    this.territory = ''
}

Domain.prototype = Object.create(Family.prototype)
Family.prototype.successor = ''

const mob = new House
mob.family = 'Mariotti'
mob.origin = 'Napoli'
mob.boss = 'Leandro Mariotti'
mob.role = 'Mob Chef'
mob.business = 'Importation and Technology'
mob.territory = 'South Side'
mob.successor = 'Heitor Mariotti'

console.table({ mob })