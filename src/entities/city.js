export class City {
  airports;
  constructor(name) {
    this.name = name;
    this.airports = [];
  }

  addAirport(airport) {
    this.airports.push(airport);
  }

  cantAirport() {
    return this.airports.length;
  }
}
// testear
