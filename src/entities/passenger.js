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
}
//testear
