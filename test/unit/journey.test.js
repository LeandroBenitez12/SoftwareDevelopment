import { Journey } from "../../src/entities/journey";
import { Flight } from "../../src/entities/flight";
import { Scale } from "../../src/entities/scale";

test("Ingreso 1 escala(10minutos) y 3 vuelos(20minutos) , la duracion total es 70 minutes", () => {
  const flightToLondres = new Flight();
  const flightToMadrid = new Flight();
  const flightToParis = new Flight();

  flightToLondres.flightDuration = 20;
  flightToMadrid.flightDuration = 20;
  flightToParis.flightDuration = 20;

  const scaleInMadrid = new Scale("Madrid", 10);

  const journeyFromToday = new Journey();

  journeyFromToday.addFlight(flightToLondres);
  journeyFromToday.addFlight(flightToMadrid);
  journeyFromToday.addFlight(flightToParis);

  journeyFromToday.addScales(scaleInMadrid);

  let durationTotal = journeyFromToday.durationTotalJourney();

  expect(durationTotal).toBe(70);
});
