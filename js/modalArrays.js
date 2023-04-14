import { 
    javascript, 
    typescript, 
    react, 
    css, 
    node, 
    git, 
    desing, 
    livros,
    scrum
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
document.addEventListener('DOMContentLoaded', function() {
    exibirListaDeCursos('.js-lista', percorreArray(javascript));
    exibirListaDeCursos('.ts-lista', percorreArray(typescript));
    exibirListaDeCursos('.rc-lista', percorreArray(react))
    exibirListaDeCursos('.css-lista', percorreArray(css))
    exibirListaDeCursos('.node-lista', percorreArray(node))
    exibirListaDeCursos('.git-lista', percorreArray(git))
    exibirListaDeCursos('.desing-lista', percorreArray(desing))
    exibirListaDeCursos('.books-lista', percorreArray(livros))
    exibirListaDeCursos('.scrum-lista', percorreArray(scrum))
});

const somarTempoCursos = (array) => {
    let tempoTotal = 0;
    for (let i = 0; i < array.length; i++) {
      tempoTotal += array[i].tempoCurso;
    }
    return tempoTotal;
}

const exibirHorasTotalDoCurso = (selecionado, titulo, array) => {
    const h2Titulo = document.querySelector(selecionado)
    h2Titulo.innerHTML = 
    `
    <h2>${titulo}<span>${somarTempoCursos(array)}hrs</span></h2>
    `
}
document.addEventListener('DOMContentLoaded', function() {
    exibirHorasTotalDoCurso('.titulo-js', 'Javascript', javascript)
    exibirHorasTotalDoCurso('.titulo-ts', 'Typescript', typescript)
    exibirHorasTotalDoCurso('.titulo-rc', 'React', react)
    exibirHorasTotalDoCurso('.titulo-css', 'CSS', css)
    exibirHorasTotalDoCurso('.titulo-node', 'Node', node)
    exibirHorasTotalDoCurso('.titulo-git', 'Git', git)
    exibirHorasTotalDoCurso('.titulo-desing', 'Desing', desing)
    exibirHorasTotalDoCurso('.titulo-books', 'Livros', livros)
    exibirHorasTotalDoCurso('.titulo-scrum', 'Scrum', scrum)
});






    





