let startGame = document.querySelector("#start-game");
startGame.addEventListener("click", handleStartGame);

//Cantidad de intentos (max 9)
let intentos = 0;

document
  .getElementById("input-mobile")
  .addEventListener("onchange", handleStartGame);

function handleStartGame() {
  let gameZone = document.querySelector("#game-zone");
  gameZone.style.display = "flex";

  startGame.style.display = "none";
  document.getElementById("add-new-word").style.display = "none";
  let giveUpButton = document.getElementById("give-up");
  giveUpButton.style.display = "flex";

  giveUpButton.addEventListener("click", () => {
    window.location.reload(false);
  });

  //Obtengo la palabra del array palabras
  let selectedWord = getWords();
  //console.log(selectedWord);

  //Cadena para registrar los caracteres erroneos repetidos.
  let stringOfWrongCharacters = "";
  //Cadena para conocer fin del juego exitoso
  let stringFlag = selectedWord;

  //Busco coincidencias con las teclas que el usuario presiona.

  document.addEventListener("keydown", (event) => {
    //Verifico coincidencia de la letra pulsada.
    let keyPressedByUser = event.key.toUpperCase();
    //Indice para controlar posicion en el iterable del string.
    let index = 0;

    if (selectedWord.includes(keyPressedByUser)) {
      for (let character of selectedWord) {
        //console.log (character)
        //console.log (keyPressedByUser)
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
    if (stringFlag.length == 0) {
      mostrarModal("Ganaste el Juego! FELICIDADES!");
      startPage();
    }

    if (intentos == formas.length) {
      mostrarModal("Estás frito angelito");
      startPage();
    }
    //console.log(stringFlag);
    //checkWinner(stringFlag);
  });
}

function startPage() {
  setInterval(() => {
    window.location.reload(false);
  }, 3000);
}
