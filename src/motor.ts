import "./main";
import {
  calcularNumeroAleatorio,
  obtenerValorCarta,
  obtenerValorUrlCarta,
  juego,
} from "./model";
import {
  aumentarPuntuacion,
  mostrarEstado,
  muestraCarta,
  deshabilitarBotones,
} from "./ui";
export const pedirCarta = () => {
  const numeroAleatorio = calcularNumeroAleatorio();

  const valorNuevaCarta = obtenerValorCarta(numeroAleatorio);
  aumentarPuntuacion(valorNuevaCarta);

  const valorUrlCarta = obtenerValorUrlCarta(numeroAleatorio);

  muestraCarta(valorUrlCarta);
  console.log("puntuacion: ", juego.puntuacion);

  if (juego.puntuacion >= 7.5) {
    mostrarEstado(juego.puntuacion);
    deshabilitarBotones();
  }
};
