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

export default acionaModal



