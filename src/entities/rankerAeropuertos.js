export class RankeadorDeAeropuertos {
  aeropuertosConMenorCantDeEscalas(aeropuertos) {
    let aeropuertoConMenorEscalas;
    let cantMenorEscalas = 9999999999999;

    aeropuertos.forEach((a) => {
      if (a.cantidadEscalas() < cantMenorEscalas) {
        cantMenorEscalas = a.cantidadEscalas();
        aeropuertoConMenorEscalas = a;
      }
    });

    return aeropuertoConMenorEscalas;
  }
}

//hacer test
