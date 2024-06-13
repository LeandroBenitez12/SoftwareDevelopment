export class Journey {
  flights = [];
  scales = [];

  addFlight(flight) {
    this.flights.push(flight);
  }

  addScales(scales) {
    this.scales.push(scales);
  }

  durationFlights() {
    // i get the duration total of the flights
    let durationTotalFlights = 0;
    this.flights.forEach((f) => {
      durationTotalFlights += f.flightDuration;
    });
    return durationTotalFlights;
  }

  durationScales() {
    // i get the duration total of the scales
    let durationTotalScales = 0;
    this.scales.forEach((s) => {
      durationTotalScales += s.scaleDuration;
    });
    return durationTotalScales;
  }

  durationTotalJourney() {
    // i get the duration total of the journey
    return this.durationScales() + this.durationFlights();
  }
}
