import { cards } from "./arrayCardsPort.js";

const percorreCards = (array) => {
    const listaDeCards = []
    for (let i = 0; i < array.length; i++) {
        listaDeCards.push({
            imagem: array[i].imagem,
            titulo: array[i].titulo,
            iconeTec: array[i].iconeTec,
            descricao: array[i].descricao,
            linkSite: array[i].linkSite,
            linkGithub: array[i].linkGithub
        })
        
    }
    return listaDeCards
}
const exibirCards = (array) => {
    const cards = document.querySelector(".portfolio-content")
    cards.innerHTML = ''
    array.forEach((obj) => {
      
        cards.innerHTML += 
        `
            <div class="cards">
                <figure>
                    <img src=${obj.imagem} alt="" class="foto-card">
                </figure>
                <div class="portfolio-card">
                    <div class="titulo-card">
                        <img src="${obj.iconeTec}" />
                        <h3>${obj.titulo}</h3>
                    </div>
                    
                    <p>
                        ${obj.descricao} 
                    </p>
                    <div class="btn-bb">
                        <button class="site-md">
                            <a href=${obj.linkSite} target="_blank" class="letra-card">
                                Site
                            </a>    
                        </button>
                        <button class="git-md">
                            <a href=${obj.linkGithub} target="_blank" class="letra-card">
                                Github
                            </a> 
                        </button>
                    </div>
                </div>    

            </div>
        `
    })
}

exibirCards(percorreCards(cards))






 




