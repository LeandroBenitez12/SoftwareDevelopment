export class Airport {
  flights;
  scales;
  name;
  constructor() {
    this.flights = [];
    this.scales = [];
  }

  addFlights(flight) {
    this.flights.push(flight);
  }

  addScales(scale) {
    this.scales.push(scale);
  }

  countArrivedFlights() {
    const arrivedFlights = this.flights.filter((f) => {
      return f.arrivalAirport == this;
    });
    return arrivedFlights;
  }

  getCountArrivedFlights(day) {
    const flightInDay = this.countArrivedFlights().filter((af) => {
      return af.arrivalDateTime == day;
    });
    return flightInDay.length;
  }

  countDepartureFlights() {
    const DepartureFlights = this.flights.filter((f) => {
      return f.departureAirport == this;
    });
    return DepartureFlights;
  }

  getCountDepartureFlights(day) {
    const flightInDay = this.countDepartureFlights().filter((af) => {
      return af.departureDateTime == day;
    });
    return flightInDay.length;
  }

  getCountScales() {
    return this.scales.length;
  }
}
