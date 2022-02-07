function handleMobileInput() {
  //Obtengo la palabra del array palabras
  let selectedWord = getWords();
  //Cadena para registrar los caracteres erroneos repetidos.
  let stringOfWrongCharacters = "";
  //Cadena para conocer fin del juego exitoso
  let stringFlag = selectedWord;

  let inputMobile = document.getElementById("input-mobile");
  inputMobile.focus();

  inputMobile.addEventListener("input", (event) => {
    //console.log(event.data);

    //Verifico coincidencia de la letra pulsada.
    let keyPressedByUser = event.data.toUpperCase();
    //Indice para controlar posicion en el iterable del string.
    let index = 0;

    if (selectedWord.includes(keyPressedByUser)) {
      for (let character of selectedWord) {
        if (character == keyPressedByUser) {
          let liCharacter = document.getElementById(index);
          liCharacter.innerHTML = keyPressedByUser;
        }
        index++;
      }
    } else if (!stringOfWrongCharacters.includes(keyPressedByUser)) {
      formas[intentos]();
      intentos++;
      let wrongUl = document.getElementById("wrong-letter");
      let wrongLi = document.createElement("li");
      wrongLi.innerHTML = keyPressedByUser;
      wrongUl.appendChild(wrongLi);
      stringOfWrongCharacters += keyPressedByUser;
    } else {
      mostrarModal("Char repetido");
    }

    stringFlag = stringFlag.replaceAll(keyPressedByUser, "");
    console.log(stringFlag);

    if (stringFlag.length == 0) {
      mostrarModal("Ganaste el Juego! FELICIDADES!");
      startPage();
    }

    if (intentos == formas.length) {
      mostrarModal("Estás frito angelito");
      startPage();
    }
  });
}
