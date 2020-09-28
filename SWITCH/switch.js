//AULA DE SWITCH CASE

/* ESTRUTURA CONDICIONAL 
Possível criar variáveis que leiam o switch (com o break para parar o bloco)
Possível criar uma função que leia o switch (com o return para parar o bloco) */

function getDiaSemanaTexto(diaSemana){
let diaSemanaTexto;

switch (diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = 'Segunda-Feira';
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = 'Terça-Feira';
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = 'Quarta-Feira';
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = 'Quinta-Feira';
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto = 'Sexta-Feira';
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = 'Sábado';
        return diaSemanaTexto;
    default:
        diaSemanaTexto = '';
}
}

const data = new Date();
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);     