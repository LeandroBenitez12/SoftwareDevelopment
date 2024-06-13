export class Passenger {
  journeys = [];
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  addJourney(journey) {
    this.journeys.push(journey);
  }
  cantJourneys() {
    return this.journeys.length;
  }

  cantVecesQueVisitaste( unaCiudad ){
    //consideramos que un pas visito una ciudad
    // si parte de un aero que estaba en esa ciudad

    //return this.
  }

  


}
//testear
