export class Airport {
  flights;
  layovers;
  constructor(name) {
    this.name = name;
    this.flights = [];
    this.layover = [];
  }
  addFlights(flight) {
    this.flights.push(flight);
  }

  addLayovers(layover) {
    this.layovers.push(layover);
  }

  flightsToDepartedOfMe() {
    return this.flights.filter((f) => f.youLeftFrom(this));
  }
  flightsToArrivedHere() {
    return this.flights.filter((f) => f.youArriveTo(this));
  }
  amountFlightsDeparturedInTheDay(fecha) {
    return this.flightsToDepartedOfMe().filter((f) => f.salisteEnFecha(fecha))
      .length;
  }

  amountFlightsArrivedInTheDay(fecha) {
    return this.flightsToArrivedHere().filter((f) => f.llegasteEnFecha(fecha))
      .length;
  }

  cantidadEscalas(){
    return this.layovers.length;
  }

  cantidadPasajeros(){
    
  }
}
