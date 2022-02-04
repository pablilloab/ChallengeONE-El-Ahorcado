function getWords() {
  //Elegimos aleatoriamente una palabra del array palabras

  let arrayPalabras = [];
  let palabras = localStorage.getItem("palabras");
  arrayPalabras = palabras.split(",");

  //console.log(arrayPalabras);
  let randomPosition = Math.floor(Math.random() * arrayPalabras.length);
  let selectedWord = arrayPalabras[randomPosition];

  //Preparamos la zona para listar las letras correctas.

  let okLetter = document.querySelector("#ok-letters");

  //Creo los elementos de la lista con ID = index para referenciarlos.
  for (let i = 0; i < selectedWord.length; i++) {
    let li = document.createElement("li");
    li.setAttribute("id", i);
    li.innerHTML = " ? ";
    okLetter.appendChild(li);
  }

  return selectedWord.toUpperCase();
}
