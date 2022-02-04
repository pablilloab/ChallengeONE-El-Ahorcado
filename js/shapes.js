let pizarra = document.querySelector("canvas");
let pincel = pizarra.getContext("2d");

//Creacion Base de la horca
pincel.fillStyle = "white";
pincel.fillRect(100, 750, 300, 50);

//Creacion Mastil de la horca
function mastil() {
  pincel.fillStyle = "white";
  pincel.fillRect(200, 100, 15, 750);
}

//Creacion Travesaño horca
function travesano() {
  pincel.fillStyle = "white";
  pincel.fillRect(200, 100, 300, 15);
}

//Creacion soga Horca
function soga() {
  pincel.fillStyle = "white";
  pincel.fillRect(500, 100, 14, 100);
}

//Creacion Cabeza
function cabeza() {
  pincel.fillStyle = "white";
  pincel.strokeStyle = "white";
  pincel.beginPath();
  pincel.arc(507, 270, 70, 0, 2 * Math.PI);
  pincel.lineWidth = 8;
  pincel.stroke();
}

//Creacion cuerpo
function cuerpo() {
  pincel.fillStyle = "withe";
  pincel.strokeStyle = "white";
  pincel.beginPath();
  pincel.moveTo(507, 340);
  pincel.lineTo(507, 550);
  pincel.lineWidth = 8;
  pincel.stroke();
}

//Creacion brazo derecho
function brazoDerecho() {
  pincel.fillStyle = "white";
  pincel.strokeStyle = "white";
  pincel.beginPath();
  pincel.moveTo(507, 360);
  pincel.lineTo(447, 420);
  pincel.lineWidth = 8;
  pincel.stroke();
}

//Creacion brazo izquierdo
function brazoIzquierdo() {
  pincel.fillStyle = "white";
  pincel.strokeStyle = "white";
  pincel.beginPath();
  pincel.moveTo(507, 360);
  pincel.lineTo(567, 420);
  pincel.lineWidth = 8;
  pincel.stroke();
}

//Creacion Pierna derecha
function piernaDerecha() {
  pincel.fillStyle = "white";
  pincel.strokeStyle = "white";
  pincel.beginPath();
  pincel.moveTo(507, 548);
  pincel.lineTo(447, 610);
  pincel.lineWidth = 8;
  pincel.stroke();
}

//Creacion pierna izquirda
function piernaIzquierda() {
  pincel.fillStyle = "white";
  pincel.strokeStyle = "white";
  pincel.beginPath();
  pincel.moveTo(507, 548);
  pincel.lineTo(567, 610);
  pincel.lineWidth = 8;
  pincel.stroke();
}

//Array con las formas
const formas = [
  mastil,
  travesano,
  soga,
  cabeza,
  cuerpo,
  brazoDerecho,
  brazoIzquierdo,
  piernaDerecha,
  piernaIzquierda,
];

//console.log(formas);
