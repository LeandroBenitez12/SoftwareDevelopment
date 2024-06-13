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
    return (this.passengersFlight.length / this.airplane.capacity) * 100;
  }
}
