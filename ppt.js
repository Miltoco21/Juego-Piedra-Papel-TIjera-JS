// Primero ingresar y seleccionar span para usar paramentros a interactuar

const computadoraElige = document.getElementById("eleccionComputadora");
const jugadorElige = document.getElementById("eleccionJugador");
const resultadoPantalla = document.getElementById("resultado");

const posibilidades = document.querySelectorAll("button"); // selecciono todo los botones
let eleccionUsuario;
let eleccionComputadora;
let resultado
posibilidades.forEach((posibilidades) =>
  posibilidades.addEventListener("click", (e) => {
    eleccionUsuario = e.target.id; // cade vez que hago click recupero el id del boton apretado
    jugadorElige.innerHTML = eleccionUsuario; // muestro la eleccion del boton y se mestra en documento
    creacioneleccionComputadora();
    obtenerResultados();
  })
);

function creacioneleccionComputadora() {
  const numeroRandom = Math.floor(Math.random() * 3) + 1;
  console.log(numeroRandom);

  if (numeroRandom === 1) {
    eleccionComputadora = "Piedra";
  }
  if (numeroRandom === 2) {
    eleccionComputadora = "Papel";
  }
  if (numeroRandom === 3) {
    eleccionComputadora = "Tijera";
  }
  computadoraElige.innerHTML = eleccionComputadora;
}

function obtenerResultados() {
  if (eleccionComputadora === eleccionUsuario) {
    resultado = "Empate";
  }
  if (eleccionComputadora === "Piedra" && eleccionUsuario === "Papel") {
    resultado = "Ganador";
  }
  if (eleccionComputadora === "Piedra" && eleccionUsuario === "Tijera") {
    resultado = "Perdiste";
  }
  if (eleccionComputadora === "Papel" && eleccionUsuario === "Tijera") {
    resultado = "Ganador";
  }
  if (eleccionComputadora === "Papel" && eleccionUsuario === "Piedra") {
    resultado = "Perdiste";
  }
  if (eleccionComputadora === "Tijeras" && eleccionUsuario === "Piedra") {
    resultado = "Ganador";
  }
  if (eleccionComputadora === "Tijeras" && eleccionUsuario === "Papel") {
    resultado = "Perdiste";
  }

  resultadoPantalla.innerHTML = resultado
}
