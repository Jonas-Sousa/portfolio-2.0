import javascript from "./arrayCursos.js";



const listaDeObj = []
for (let i = 0; i < javascript.length; i++) {
    
    listaDeObj.push({
        titulo: javascript[i].titulo,
        subTitulo: javascript[i].subTitulo,
        tempo: javascript[i].tempoCurso
    })
}

listaDeObj.forEach((obj) => {
    console.log(obj.subTitulo);
})






    





