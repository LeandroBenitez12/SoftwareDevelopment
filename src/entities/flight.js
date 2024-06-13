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

  setAirplane(plane) {
    this.airplane = plane;
  }

  capacityFlightTotal() {
    // this calculate the number of passengers on a flight
    return (this.passengersFlight.length / this.airplane.capacity) * 100;
  }
}
