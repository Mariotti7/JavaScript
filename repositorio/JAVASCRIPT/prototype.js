// subclasses e heranças com prototype

function Company() {
    this.role = ''
    this.dept = ''
}

function Employee() {
    Company.call(this)
    this.name = ''
    this.speciality = []
}

Employee.prototype = Object.create(Company.prototype)

function WorkSpace() {
    Employee.call(this)
    this.project = []
}

WorkSpace.prototype = Object.create(Employee.prototype)

function Chapter() {
    WorkSpace.call(this)
    this.chapter = ''
}

Chapter.prototype = Object.create(WorkSpace.prototype)

const heitor = new Company
heitor.role = 'Developer'
heitor.dept = 'Sustentation'
heitor.name = 'Heitor Mariotti'
heitor.speciality = ['Back End']
heitor.project = ['Bug Fix Squad', 'Skroller Crew']
heitor.chapter = 'Engineer'

console.table({ heitor })