let addWord = document.getElementById("add-new-word");

addWord.addEventListener("click", () => {
  //Muestro zona de carga de palabras
  let newWordZone = document.getElementById("new-word-zone");
  newWordZone.style.display = "flex";

  //Capto los botones para esconderlos.
  document.getElementById("start-game").style.display = "none";
  document.getElementById("add-new-word").style.display = "none";

  let saveButton = document.getElementById("save-start");
  saveButton.addEventListener("click", saveWord);

  let cancelButton = document.getElementById("cancel");
  cancelButton.addEventListener("click", () => {
    window.location.reload(false);
  });
});

//Capturo palabra
function saveWord() {
  let newWord = document.getElementById("word").value.toUpperCase();

  let arrayPalabras = [];
  let palabras = localStorage.getItem("palabras");
  arrayPalabras = palabras.split(",");

  if (arrayPalabras.includes(newWord) == false) {
    arrayPalabras.push(newWord);
    localStorage.setItem("palabras", arrayPalabras);

    mostrarModal("Palabra agregada exitosamente");
    startPage();
  } else {
    mostrarModal("Palabra existente en nuestra lista de palabras.");
  }
}
