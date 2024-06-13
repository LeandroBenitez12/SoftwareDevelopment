import { RankerAirports } from "../../src/entities/rankerAirports";
import { Airport } from "../../src/entities/airport";
import { Scale } from "../../src/entities/scale";

test("agrego 2 aeropuerto uno con 1 escala el otro con 2, el ranker de airport me da a el other airport como el que mas escalas tuvo", () => {
  const anAirport = new Airport();
  anAirport.name = "Airport1111";
  const otherAirport = new Airport();
  otherAirport.name = "Airport2222";
  const scaleOne = new Scale(anAirport, 10);
  const scaleTwo = new Scale(otherAirport, 10);
  const scaleThree = new Scale(otherAirport, 10);

  anAirport.addScales(scaleOne);
  otherAirport.addScales(scaleTwo);
  otherAirport.addScales(scaleThree);

  const ranker = new RankerAirports();
  let aeropuertoconmenorvuelosdeescala = ranker.airportsWithFewestStops([
    anAirport,
    otherAirport,
  ]);

  expect(aeropuertoconmenorvuelosdeescala.name).toBe(anAirport.name);
});
