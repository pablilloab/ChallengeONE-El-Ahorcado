//Objeto con algunas palabras
const palabras = ["PABLO", "PIMPI", "COQUII"];

let arrayPalabras = [];
let json = localStorage.getItem("palabras");

if (json == null) {
  localStorage.setItem("palabras", palabras);
} else {
  arrayPalabras = json.split(",");

  let merdedArray = palabras.concat(arrayPalabras).unique();
  localStorage.setItem("palabras", merdedArray);
}
