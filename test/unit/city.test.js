import { City } from "../../src/entities/city";
import { Airport } from "../../src/entities/airport";

test("Madrid has two airports", () => {
  const madrid = new City("madrid");
  const anAirport = new Airport();
  const otherAirport = new Airport();

  madrid.addAirport(anAirport);
  madrid.addAirport(otherAirport);

  expect(madrid.countAirports()).toBe(2);
});
