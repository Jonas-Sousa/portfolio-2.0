import javascript from "./arrayCursos.js";



const listaDeObj = []
for (let i = 0; i < javascript.length; i++) {
    
    listaDeObj.push({
        titulo: javascript[i].titulo,
        subTitulo: javascript[i].subTitulo,
        tempo: javascript[i].tempoCurso
    })
}

const exibirListaDeCursos = () => {
    const uljs = document.querySelector('.modal-lista')

    uljs.innerHTML = ''
    listaDeObj.forEach((obj, index) => {
      
        uljs.innerHTML += 
        `
            <li data-value="${index}">
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







    





