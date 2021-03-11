
export class ContaCorrente {
    agencia;
    cliente;
    _saldo = 0;
  
    sacar(valor) {
      if (this._saldo >= valor) {
        this._saldo -= valor;
        console.log(`Saque efetuado: R$ ${valor}`);
        console.log(`Saldo disponível: R$ ${this._saldo}`);
        return valor
      } else {
        console.log(`Não é possível sacar R$ ${valor}`);
        console.log(`Saldo disponível: R$ ${this._saldo}`);
      }
    }
  
    deposito(valor) {
      console.log(`Saldo atual: R$ ${this._saldo}`);
      if(valor > 0){
      this._saldo += valor;
      console.log(`Valor depositado: R$ ${valor}`) 
      console.log(`Saldo atual: R$ ${this._saldo}`)
      }else{
          console.log('Operação impossível!')
      }
    }

    transferir(valor, conta){
      if(this._saldo >= valor){
        const valorSacado = this.sacar(valor)
        console.log(`Depósito de R$ ${valorSacado} para outra conta`)
        conta.deposito(valorSacado)
      }else{
        console.log('Não é possível transferir. Saldo indiponível!')
      }
    }

  }
  