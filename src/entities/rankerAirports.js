export class RankerAirports {
  airportsWithFewestStops(aeropuertos) {
    let aeropuertoConMenorEscalas;
    let cantMenorEscalas = 9999999999999;

    aeropuertos.forEach((a) => {
      if (a.getCountScales() < cantMenorEscalas) {
        cantMenorEscalas = a.getCountScales();
        aeropuertoConMenorEscalas = a;
      }
    });

    return aeropuertoConMenorEscalas;
  }
}

//hacer test
