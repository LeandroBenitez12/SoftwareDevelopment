export class City {
  airports;
  constructor(name) {
    this.name = name;
    this.airports = [];
  }

  addAirport(airport) {
    this.airports.push(airport);
  }

  cantAirport() {
    return this.airports.length;
  }
  cantPasajeLlegaronEl(dia){
    let cantidad = 0;

    this.airports.forEach(a => {
      a.amountFlightsArrivedInTheDay(dia).forEach(v =>{
        cantidad += v.cantidadPasajeros();
      });
    });
  }
}
// testear
