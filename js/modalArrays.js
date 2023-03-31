import { 
    javascript, 
    typescript, 
    react, 
    css, 
    node, 
    git, 
    desing, 
    inovacao, 
    livros 
} 
from "./arrayCursos.js"

const percorreArray = (array) => {
    const listaDeObj = []
    for (let i = 0; i < array.length; i++) {
        listaDeObj.push({
            titulo: array[i].titulo,
            subTitulo: array[i].subTitulo,
            tempo: array[i].tempoCurso
        })
        
    }
    
    return listaDeObj
}

const exibirListaDeCursos = (selecionado, array) => {
    const uljs = document.querySelector(selecionado)

    uljs.innerHTML = ''
    array.forEach((obj) => {
      
        uljs.innerHTML += 
        `
            <li>
                <a href="">
                    <h3>${obj.titulo}</h3>
                    <p>${obj.subTitulo}</p>
                     <span> ${obj.tempo}hrs</span>
                 </a>
            </li>
        `
        
    })
}
exibirListaDeCursos('.js-lista', percorreArray(javascript))
exibirListaDeCursos('.ts-lista', percorreArray(typescript))



function somarTempoCursos(array) {
    let tempoTotal = 0;
    for (let i = 0; i < array.length; i++) {
      tempoTotal += array[i].tempoCurso;
    }
    return tempoTotal;
}

const exibirHorasTotalDoCurso = (selecionado, titulo, arr) => {
    const h2Titulo = document.querySelector(selecionado)
    h2Titulo.innerHTML = 
    `
    <h2>${titulo}<span>${somarTempoCursos(arr)}hrs</span></h2>
    `
}
exibirHorasTotalDoCurso('.titulo-js', 'Javascript', javascript)
exibirHorasTotalDoCurso('.titulo-ts', 'Typescript', typescript)





    





