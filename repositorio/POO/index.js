//SISTEMA BANCO DIGITAL | CLIK BANK

//import das classes
//Usando o npm init pra criar um package.json pra que o node interpretasse o import
import {Cliente} from "./Cliente.js" 
import {ContaCorrente} from "./ContaCorrente.js"

//DADOS CLIENTE
const cliente1 = new Cliente();
cliente1.nome = "Heitor Mariotti";
cliente1.cpf = "22233344409";

const contaCorrenteHeitor = new ContaCorrente();
contaCorrenteHeitor.agencia = 1001;
contaCorrenteHeitor.cliente = cliente1;


const cliente2 = new Cliente();
cliente2.nome = "Alice Wonderland";
cliente2.cpf = "55533344409";

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.agencia = 1002;
contaCorrenteAlice.cliente = cliente2

console.log('===== CLIK BANK | SEU BANCO DIGITAL EM UM CLICK =====')
//OPERAÇÃO FINANCEIRA
console.log(`Olá ${cliente1.nome}! Agencia: ${contaCorrenteHeitor.agencia}`)
contaCorrenteHeitor.deposito(10000)
console.log()
contaCorrenteHeitor.sacar(200)
console.log()
console.log('Transfência')
contaCorrenteHeitor.transferir(500, contaCorrenteAlice)

console.log()

//Informações dos clientes
console.log(contaCorrenteHeitor)
console.log(contaCorrenteAlice)






