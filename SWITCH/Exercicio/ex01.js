const h1 = document.querySelector('.container h1');
h1.innerHTML = `${getDataHora()}, ${getDiaHora()} de ${getMesHora()} de ${getAnoHora()} `;
h1.innerHTML += `<br>`;
h1.innerHTML += `${getHora()}`;

function getDataHora(){
    const data = new Date();
    const diaSemana = data.getDay();
    
    let diaSemanaTexto;

    switch(diaSemana){
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

function getDiaHora(){
    const dia = new Date();
    const diaDia = dia.getDate();

    return diaDia;
}

function getMesHora(){
    const mes = new Date();
    const diaMes = mes.getMonth();

    let diaMesTexto;

    switch(diaMes){
        case 0:
        diaMesTexto = 'Janeiro';
        return diaMesTexto;
        case 1:
        diaMesTexto = 'Fevereiro';
        return diaMesTexto;
        case 2:
       diaMesTexto = 'Março';
        return diaMesTexto;
        case 3:
        diaMesTexto = 'Abril';
        return diaMesTexto;
        case 4:
        diaMesTexto = 'Maio';
        return diaMesTexto;
        case 5:
        diaMesTexto = 'Junho';
        return diaMesTexto;
        case 6:
        diaMesTexto = 'Julho';
        return diaMesTexto;
         case 7:
        diaMesTexto = 'Agosto';
        return diaMesTexto;
         case 8:
        diaMesTexto = 'Setembro';
        return diaMesTexto;
         case 9:
        diaMesTexto = 'Outubro';
        return diaMesTexto;
         case 10:
        diaMesTexto = 'Novembro';
        return diaMesTexto;
         case 11:
        diaMesTexto = 'Dezembro';
        return diaMesTexto;
        default:
            diaSemanaTexto = '';
    }

}

function getAnoHora(){

    const ano = new Date();
    const diaAno = ano.getFullYear();

    return diaAno;
}

function getHora(){
    const hora = new Date();
    const diaHora = hora.getHours();
    const diaMin = hora.getMinutes();
    const diaSec = hora.getSeconds();
    

    return `${diaHora}:${diaMin}:${diaSec}`;
}

