// subclasses e heranças

function Employee() {
    this.name = ''
    this.dept = 'general'
}

function Manager() {
    Employee.call(this)
    this.reports = []
}

Manager.prototype = Object.create(Employee.prototype)

function WorkBee() {
    Employee.call(this)
    this.projects = []
}

WorkBee.prototype = Object.create(Employee.prototype)

function SalesPerson() {
    WorkBee.call(this)
    this.quota = 100
    this.dept = 'sales'
}

SalesPerson.prototype = Object.create(WorkBee.prototype)

function Engineer() {
    WorkBee.call(this)
    this.machine = ''
    this.dept = 'engineering'
}

Engineer.prototype = Object.create(WorkBee.prototype)

const heitor = new Employee
heitor.name = 'Heitor Mariotti'
heitor.dept = 'Engineer'
heitor.reports = ['Engineer Manager']
heitor.projects = ['Skore One']
heitor.speciality = 'Back End Development'

const leandro = new Manager
leandro.name = 'Leandro Mariotti'
leandro.dept = 'Engineer Manager'
leandro.reports = ['CEO', 'CTO']
leandro.projects = heitor.projects
leandro.charge = 'Manager' // É possível criar novas propriedades no objeto

const gustavo = new WorkBee
gustavo.name = 'Gustavo Henrique'
gustavo.dept = 'Marketing'
gustavo.projects = ['Content Creator']
gustavo.reports = ['Sales Manager']

const marla = new SalesPerson
marla.name = 'Linghel Marla'
marla.dept = 'Sales Manager'
marla.projects = ['International Aquisition Branding']
marla.quota
marla.reports = ['CEO', 'CCO']


Employee.prototype.speciality = '' // Você pode adicionar uma propriedade para todos, afinal o pai é a função Employee

console.table({ heitor, leandro, gustavo, marla })