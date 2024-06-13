import { Flight } from "../../src/entities/flight";
import { Airplane } from "../../src/entities/airplane";
import { Passenger } from "../../src/entities/passenger";

test("the flight has three passenger of 100 available, so 3 percentage of capacity", () => {
  const anAirplane = new Airplane(100);
  const passengerOne = new Passenger("Leandro", "Benitez");
  const passengerTwo = new Passenger("Juan", "Benitez");
  const passengerThree = new Passenger("Juana", "Benitez");

  const anFlight = new Flight();
  anFlight.setAirplane(anAirplane);
  anFlight.addPassenger(passengerOne);
  anFlight.addPassenger(passengerTwo);
  anFlight.addPassenger(passengerThree);

  let flightCapacity = anFlight.capacityFlightTotal();

  const capacityExpected = 3;
  expect(flightCapacity).toBe(capacityExpected);
});
