const container = document.querySelector('.teste');
const divCard = document.querySelector('.teste-portfolio-card')
const body = document.querySelector('body')

container.addEventListener('mouseenter', () => {
  divCard.classList.remove('ativo');
    divCard.innerHTML = 
    `
        <figure >
            <img src="./img/x.svg" alt="" class="x" id="coisa">
        </figure>
        <h3>TESTE</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Obcaecati a corporis 
        </p>
        <div class="btn-bb">
            <button class="site-md">
                <a href="https://example"   target="_blank" class="letra-card">
                    Site
                </a>    
            </button>
            <button class="git-md">
                <a href="https://example"   target="_blank" class="letra-card">
                    Github
                </a> 
            </button>
        </div>
    `

    const x = document.querySelector('#coisa')
    x.addEventListener('click', () => {
        divCard.classList.add('ativo');
    });

    
});

body.addEventListener('click', () => {
    divCard.classList.add('ativo');
});





