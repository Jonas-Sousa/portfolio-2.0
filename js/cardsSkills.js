import { skillsContent } from "./arraySkillsContent.js"
import acionaModal from "./modalSkills.js";

console.log(skillsContent);

const percorreSkills = (array) => {
    const listaSkillsContent = []
    for (let i = 0; i < array.length; i++) {
        listaSkillsContent.push({
            imagemPrincipal: array[i].imagemPrincipal,
            arquivoBTN: array[i].arquivoBTN,
            arquivoSVG: array[i].arquivoSVG,
            divModal: array[i].divModal,
            tituloDiv: array[i].tituloDiv,
            listaCursos: array[i].listaCursos,
            cursos: array[i].cursos

        })
    }
    return listaSkillsContent
}

const exibirLiSkills = (array) => {
    const skillsUl = document.querySelector('.skills-content')
    
    skillsUl.innerHTML = ''
    array.forEach((obj) => {
      
        skillsUl.innerHTML += 
        
        `
            <li class="card-skills">
                                
                <figure>
                    <img src="${obj.imagemPrincipal}" alt="">
                    <img src="./img/Click .png" alt="" class="open-modal ${obj.arquivoBTN}" >
                </figure>
                <div class="modal ${obj.divModal}">
                    <div class="modal-content">
                        <div class=${obj.tituloDiv}></div>
                        <figure>
                            <?xml version="1.0" encoding="utf-8"?>
                            <svg 
                                class="close-modal ${obj.arquivoSVG}"
                                width="800px" 
                                height="800px" 
                                viewBox="0 0 20 20" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none">
                                <path 
                                    fill="#000000" 
                                    fill-rule="evenodd" 
                                    d="M16.293 17.707a1 1 0 001.414-1.414L11.414 
                                    10l6.293-6.293a1 1 0 00-1.414-1.414L10 8.586 
                                    3.707 2.293a1 1 0 00-1.414 1.414L8.586 10l-6.293 
                                    6.293a1 1 0 101.414 1.414L10 11.414l6.293 6.293z"
                                />
                            </svg>
                        </figure>
                        <ul class="modal-lista ${obj.listaCursos} "></ul>                                                                  </ul>
                    </div>
                </div>    
            </li>
        `

    })

    array.forEach((obj) => {
        acionaModal(`.${obj.arquivoBTN}`, `.${obj.divModal}`, `.${obj.arquivoSVG}`);
    });

}


exibirLiSkills(percorreSkills(skillsContent));



