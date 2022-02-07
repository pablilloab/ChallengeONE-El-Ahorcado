let startGame = document.querySelector("#start-game");
startGame.addEventListener("click", handleStartGame);

//Cantidad de intentos (max 9)
let intentos = 0;

//Cadena para registrar los caracteres erroneos repetidos.
let stringOfWrongCharacters = "";

function handleStartGame() {
  //Muestro zona de juego (pizarra mas boton giveup)
  showGameZone();

  //Valido si es desktop o mobile y ejecuto segun corresponda
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    handleMobileInput();
  } else {
    handleDesktopInput();
  }
}
