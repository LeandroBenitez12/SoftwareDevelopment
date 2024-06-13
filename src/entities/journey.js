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
    let durationTotalFlights = 0;
    this.flights.forEach((f) => {
      durationTotalFlights += f.flightDuration;
    });
    return durationTotalFlights;
  }

  durationScales() {
    let durationTotalScales = 0;
    this.scales.forEach((s) => {
      durationTotalScales += s.scaleDuration;
    });
    return durationTotalScales;
  }

  durationTotalJourney() {
    return this.durationScales() + this.durationFlights();
  }
}
