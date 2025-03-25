export const calcularNumeroAleatorio = () => Math.floor(Math.random() * 10) + 1;

export const obtenerValorCarta = (numeroAleatorio: number) =>
  numeroAleatorio > 7 ? 0.5 : numeroAleatorio;

export const obtenerValorUrlCarta = (numeroAleatorio: number) =>
  numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;
