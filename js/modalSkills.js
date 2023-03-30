const acionaModal = (classBtn, classModal, classSpan) => {
  const btn = document.querySelector(classBtn);
  const modal = document.querySelector(classModal);
  const span = document.querySelector(classSpan);
  
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
  return acionaModal
}
// JAVASCRIPT
acionaModal(".js-btn", ".js-modal", ".js-svg")
// TYPESCRIPT
acionaModal(".ts-btn", ".ts-modal", ".ts-svg")


