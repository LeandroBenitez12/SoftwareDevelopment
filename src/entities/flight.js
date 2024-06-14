export class Flight {
  airplane;
  departureAirport;
  arrivalAirport;
  airline;
  departureDateTime;
  arrivalDateTime;
  flightDuration;
  passengersFlight = [];
  airportCrew = [];

  addPassenger(passenger) {
    this.passengersFlight.push(passenger);
  }

  countPassengers() {
    return this.passengersFlight.length;
  }
  setAirplane(airplane) {
    this.airplane = airplane;
  }

  setArrivalAirport(anAirport) {
    this.arrivalAirport = anAirport;
  }

  setArrivalDateTime(DateTime) {
    this.arrivalDateTime = DateTime;
  }

  setDepartureAirport(anAirport) {
    this.departureAirport = anAirport;
  }

  setDepartureDateTime(DateTime) {
    this.departureDateTime = DateTime;
  }

  capacityFlightTotal() {
    // this calculate the number of passengers on a flight
    return (this.countPassengers() / this.airplane.capacity) * 100;
  }
}
