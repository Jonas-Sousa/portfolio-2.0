// Obtenha o botão e o modal
var btn = document.getElementById("open-modal");
var modal = document.getElementById("modal");

// Obtenha o botão de fechar dentro do modal
var span = document.getElementById("close-modal");

// Quando o usuário clicar no botão, abra o modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Quando o usuário clicar no botão de fechar, feche o modal
span.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, feche-o
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}