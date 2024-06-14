export class City {
  airports;
  constructor(name) {
    this.name = name;
    this.airports = [];
  }

  addAirport(airport) {
    this.airports.push(airport);
  }

  countAirports() {
    return this.airports.length;
  }

  cantidadPasajerosQueLlegaron(day) {
    let count = 0;

    this.airports.forEach((a) => {
      a.countArrivedFlights(day).forEach((v) => {
        count += v.countPassengers();
      });
    });
    return count;
  }
  tenesAeropuerto(unAeropuerto) {
    return this.airports.includes(unAeropuerto);
  }
}
// testear
