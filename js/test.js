const frase = "<h1>#Jonas-Sousa<span> {</span><br><span class='text-azul'>Front-end</span><span class='pontuacao'>:</span><span class='text-lilas'>Developer</span><span class='pontuacao'>;</span><br><span>}</span></h1>"
const frase2 = "teste 1234"
const frase3 = "teste 4321"
const elemento = document.querySelector(".text-jonas");

function escreverFraseLinhaPorLinha(frase, elemento) {
  let contador = 0;
  let intervalo = setInterval(function() {
    let linha = frase.substring(0, contador);
    elemento.innerHTML = linha;
    contador++;
    if (contador > frase.length) {
      clearInterval(intervalo);
    }
  }, 80); // 50 é o tempo de atraso entre cada linha (em milissegundos)
}

escreverFraseLinhaPorLinha(frase, elemento);