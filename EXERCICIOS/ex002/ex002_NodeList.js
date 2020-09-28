const paragrafos = document.querySelector('.paragrafos'); // pegou a section
const ps = document.querySelectorAll('p');// pegou o paragrafo dentro da section

const estilosBody = getComputedStyle(document.body); //para pegar pegar estilo css do body
const backgroundColorBody = estilosBody.backgroundColor; //para pegar a cor de fundo do body
console.log(backgroundColorBody); //para escrever no console a cor de fundo

for (let p of ps){ // para criar um laço e trocar a cor de fundo do paragrafo e a cor do texto
    p.style.backgroundColor = 'rgb(18, 50, 52)'; // ou backgroundColorBody no lugar do RGB
    p.style.color = '#fff';
}

