import { FlightPath } from "../../src/entities/flightPath";
import { Layover } from "../../src/entities/layover";
import { Flight } from "../../src/entities/flight";
test(" Creo un vuelo con 1 escala de duracion de 10 y sus vuelos son 2 y cada uno dura 30min , el resultado esperado es 70min ", () => {
  const layoverInJorNewb = new Layover("Jorge New", 10);

  const flightToCordoba = new Flight("x", "x", "x");
  const flightToJorNewb = new Flight("x", "x", "x");

  flightToCordoba.durationAproxInMinutes = 30;
  flightToJorNewb.durationAproxInMinutes = 30;

  const journey = new FlightPath();

  journey.addFlight(flightToCordoba);
  journey.addFlight(flightToJorNewb);

  journey.addLayover(layoverInJorNewb);
  let durationTotalJourney = journey.durationTotalAprox();

  const durationTotalJourneyExpected = 70;

  expect(durationTotalJourney).toBe(durationTotalJourneyExpected);
});
