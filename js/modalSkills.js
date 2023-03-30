


const btn = document.querySelector(".open-modal");
const modal = document.querySelector(".modal");

const span = document.querySelector(".close-modal");

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// TYPESCRIPT

const btnTs = document.querySelector(".ts-btn");
const modalTs= document.querySelector(".ts-div");

const spanTs = document.querySelector(".ts-svg");

btnTs.onclick = function() {
  modalTs.style.display = "block";
}

spanTs.onclick = function() {
  modalTs.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalTs) {
    modalTs.style.display = "none";
  }
}