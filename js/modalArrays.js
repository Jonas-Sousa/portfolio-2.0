import { javascript, typescript } from "./arrayCursos.js"

const percorreArray = (abc) => {
    const listaDeObj = []
    for (let i = 0; i < abc.length; i++) {
        listaDeObj.push({
            titulo: abc[i].titulo,
            subTitulo: abc[i].subTitulo,
            tempo: abc[i].tempoCurso
        })
        
    }
    
    return listaDeObj
}

const exibirListaDeCursos = (selecionado, doidera) => {
    const uljs = document.querySelector(selecionado)

    uljs.innerHTML = ''
    doidera.forEach((obj) => {
      
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
exibirListaDeCursos('.ts-lista', percorreArray(typescript))
exibirListaDeCursos('.js-lista', percorreArray(javascript))


function somarTempoCursos(array) {
    let tempoTotal = 0;
    for (let i = 0; i < array.length; i++) {
      tempoTotal += array[i].tempoCurso;
    }
    return tempoTotal;
}

const exibirHorasTotalDoCurso = (h2, titulo, arr) => {
    const h2Titulo = document.querySelector(h2)
    h2Titulo.innerHTML = 
    `
    <h2>${titulo}<span>${somarTempoCursos(arr)}hrs</span></h2>
    `
}
exibirHorasTotalDoCurso('.titulo-ts', 'Typescript', typescript)
exibirHorasTotalDoCurso('.titulo-js', 'Javascript', javascript)




    





