import { Airport } from "../../src/entities/airport";
import { Flight } from "../../src/entities/flight";

test("2 vuelos salieron el 2024/06/07 de Buenos Aires", () => {
  const aeropuertoBsAs = new Airport("Jorge Newbery");

  const today = "2024-06-07";

  const unVuelo = new Flight("x", aeropuertoBsAs, "x", today);

  aeropuertoBsAs.addFlights(unVuelo);

  const amountGetting =
    aeropuertoBsAs.amountFlightsDeparturedInTheDay("2024-06-07");

  expect(amountGetting).toBe(2);
});
