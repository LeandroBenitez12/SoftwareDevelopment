export class FlightPath {
  flights = [];
  layovers = [];

  addFlight(flight) {
    this.flights.push(flight);
  }

  addLayover(layover) {
    this.layovers.push(layover);
  }

  durationTotalFlying() {
    let durationFlight = 0;
    for (var i = 0; i < this.flights.length; i++) {
      durationFlight += this.flights[i].durationAproxInMinutes;
    }
    return durationFlight;
  }

  durationTotalLayover() {
    let durationLayover = 0;
    for (var i = 0; i < this.layovers.length; i++) {
      durationLayover += this.layovers[i].durationAproxInMinutes;
    }
    return durationLayover;
  }

  durationTotalAprox() {
    return this.durationTotalFlying() + this.durationTotalLayover();
  }
}
