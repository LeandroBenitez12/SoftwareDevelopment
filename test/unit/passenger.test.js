import { Passenger } from "../../src/entities/passenger";
import { Flight } from "../../src/entities/flight";

test("Passenger fly 2 times", () => {
  const passengerOne = new Passenger("keandro", "benitez");

  const flightToMadrid = new Flight();
  const flightToJapon = new Flight();

  passengerOne.addFlight(flightToJapon);
  passengerOne.addFlight(flightToMadrid);

  let flightPassengerOne = passengerOne.countFlights();

  expect(flightPassengerOne).toBe(2);
});
