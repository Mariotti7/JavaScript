//AULA ATRIBUIÇÃO VIA DESESTRUTURAÇÃO OBJETOS

const pessoa = {
    nome: 'Leandro',
    sobrenome: 'Mariotti',
    idade: 29,
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    }
}
console.log(pessoa)
console.log(pessoa.nome)

//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
const { nome } = pessoa; // extrai do objeto o que está na chave
console.log(nome);

//Outros exemplos
// Você pode extrair um valor que nao exista dentro do objeto e atribuir valor a ele;
const { apelido = 'Não existe', sobrenome } = pessoa;
console.log(apelido, sobrenome);

//Você pode alterar o nome da chave do objeto;
//Coloque o nome da chave + dois pontos e em seguida atribua um novo nome para a chave;
const { idade: tamanho} = pessoa;
console.log(tamanho); // Não existe mais a chave 'idade', agora ela é 'tamanho';


 
