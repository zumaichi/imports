import {
  calcularNumeroAleatorio,
  obtenerValorCarta,
  obtenerValorUrlCarta,
  partida,
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
  console.log("puntuacion: ", partida.puntuacion);

  if (partida.puntuacion >= 7.5) {
    mostrarEstado(partida.puntuacion);
    deshabilitarBotones();
  }
};
