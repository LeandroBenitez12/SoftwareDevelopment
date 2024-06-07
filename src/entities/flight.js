export class Flight {
  passengers;
  airCrews;
  airport;
  durationAproxInMinutes;
  fechaHoraLlegada;
  fechaHoraSalida;
  constructor(plane, departure, destination, departdatetime) {
    this.plane = plane;
    this.departure = departure;
    this.destination = destination;
    this.departdatetime = departdatetime;
    this.passengers = [];
    this.airCrews = [];
  }

  addPassenger(passenger) {
    this.passengers.push(passenger);
  }
  capacityOccupiedByPassengers() {
    return (this.passengers.length / this.plane.capacity) * 100;
  }

  youLeftFrom(anAirport) {
    return (this.departure = anAirport);
  }

  youArriveTo(anAirport) {
    return (this.destination = anAirport);
  }
  salisteEnFecha(fecha) {
    return this.fechaHoraSalida == fecha;
  }
  llegasteEnFecha(fecha) {
    return this.fechaHoraLlegada == fecha;
  }
  cantidadPasajeros() {
    this.passengers.length;
  }
}
