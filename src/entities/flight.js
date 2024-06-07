export class Flight {
  passengers;
  airCrews;
  constructor(plane, departure, destination) {
    this.plane = plane;
    this.departure = departure;
    this.destination = destination;
    this.passengers = [];
    this.airCrews = [];
  }
}
