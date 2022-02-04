function mostrarModal(textoDelModal) {
  let modal = document.getElementById("modalwrapper");
  modal.style.display = "block";

  let spanModal = document.getElementById("infotaller");
  spanModal.innerHTML = textoDelModal;

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
