export class Passenger {
  flights = [];
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  addFlight(flight) {
    this.flights.push(flight);
  }
  countFlights() {
    return this.flights.length;
  }

  cantVecesQueVisitaste(aCity) {
    //Consideramos que un pasajero visitó una ciudad
    //si partió de un aeropuerto que estaba en esa ciudad
    return this.flights.filter((j) =>
      aCity.tenesAeropuerto(j.departureAirport)
    ).length;
  }
}
//testear
