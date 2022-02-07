function showGameZone() {
  //Muestro zona de inicio
  let gameZone = document.querySelector("#game-zone");
  gameZone.style.display = "flex";

  //Oculto botono de inicio
  startGame.style.display = "none";
  document.getElementById("add-new-word").style.display = "none";

  let giveUpButton = document.getElementById("give-up");
  giveUpButton.style.display = "flex";

  giveUpButton.addEventListener("click", () => {
    window.location.reload(false);
  });
}
