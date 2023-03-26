import javascript from "./arrayCursos.js";

const listaDeObj = []
for (let i = 0; i < javascript.length; i++) {
    listaDeObj.push({
        titulo: javascript[i].titulo,
        subTitulo: javascript[i].subTitulo,
        tempo: javascript[i].tempoCurso
    })
}

function somarTempoCursos(array) {
    let tempoTotal = 0;
    for (let i = 0; i < array.length; i++) {
      tempoTotal += array[i].tempoCurso;
    }
    return tempoTotal;
}

console.log();
const exibirHorasTotalDoCurso = () => {
    const h2Titulo = document.querySelector('.titulo-js')
    h2Titulo.innerHTML = 
    `

    <h2>Javascript<span>${somarTempoCursos(javascript)}hrs</span></h2>
    
    `
}
exibirHorasTotalDoCurso()


const exibirListaDeCursos = () => {
    const uljs = document.querySelector('.modal-lista')

    uljs.innerHTML = ''
    listaDeObj.forEach((obj) => {
      
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
exibirListaDeCursos()







    





