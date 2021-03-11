function Family(name, boss, origin) {
    this.name = name || ''
    this.boss = boss || ''
    this.origin = origin || ''
}

const mob = new Family('Melchior/Mariotti', 'Leandro Mariotti', 'São Paulo/Napoli')
mob.successor = 'Heitor Mariotti'
console.log({ mob })

