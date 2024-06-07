export class Flight {
  passengers;
  airCrews;
  constructor(plane, departure, destination, departdatetime) {
    this.plane = plane;
    this.departure = departure;
    this.destination = destination;
    this.departdatetime = departdatetime;
    this.passengers = [];
    this.airCrews = [];
  }

  capacityOccupiedByPassengers() {
    return (this.passengers.length / this.plane.capacity) * 100;
  }
}
