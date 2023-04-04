const acionaModal = (classBtn, classModal, classSpan) => {
  const btn = document.querySelector(classBtn);
  const modal = document.querySelector(classModal);
  const span = document.querySelector(classSpan);
  const body = document.querySelector('body')
  
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  body.addEventListener('click', (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  })  

  return acionaModal
}

// JAVASCRIPT
acionaModal(".js-btn", ".js-modal", ".js-svg")
// TYPESCRIPT
acionaModal(".ts-btn", ".ts-modal", ".ts-svg")
// REACT
acionaModal(".rc-btn", ".rc-modal", ".rc-svg")
// CSS 
acionaModal(".css-btn", ".css-modal", ".css-svg")
// NODE
acionaModal(".node-btn", ".node-modal", ".node-svg")
// GIT
acionaModal(".git-btn", ".git-modal", ".git-svg")
// FIGMA
acionaModal(".desing-btn", ".desing-modal", ".desing-svg")
// BOOKS
acionaModal(".books-btn", ".books-modal", ".books-svg")
// SCRUM
acionaModal(".scrum-btn", ".scrum-modal", ".scrum-svg")

