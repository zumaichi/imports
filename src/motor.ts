import {
  muestraCarta,
  aumentarPuntuacion,
  mostrarEstado,
  deshabilitarBotones,
} from "./ui";
interface Partida {
  puntuacion: number;
  calcularNumeroAleatorio: number;
  obtenerValorCarta: number;
  obtenerValorUrlCarta: number;
  cartaUrl: number;
}

export const Partida: Partida = {
  puntuacion: 0,
  calcularNumeroAleatorio: 0,
  obtenerValorCarta: 0,
  obtenerValorUrlCarta: 0,
  cartaUrl: 0,
};

export const calcularNumeroAleatorio = () => Math.floor(Math.random() * 10) + 1;

export const obtenerValorCarta = (numeroAleatorio: number) =>
  numeroAleatorio > 7 ? 0.5 : numeroAleatorio;

export const obtenerValorUrlCarta = (numeroAleatorio: number) =>
  numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;

export const pedirCarta = () => {
  const numeroAleatorio = calcularNumeroAleatorio();

  const valorNuevaCarta = obtenerValorCarta(numeroAleatorio);
  aumentarPuntuacion(valorNuevaCarta);

  const valorUrlCarta = obtenerValorUrlCarta(numeroAleatorio);

  muestraCarta(valorUrlCarta);
  console.log("puntuacion: ", Partida.puntuacion);

  if (Partida.puntuacion >= 7.5) {
    mostrarEstado(Partida.puntuacion);
    deshabilitarBotones();
  }
};
