import { Passenger } from "../../src/entities/passenger";
import { Flight } from "../../src/entities/flight";
import { City } from "../../src/entities/city";
import { Airport } from "../../src/entities/airport";

test("Passenger fly 2 times", () => {
  const passengerOne = new Passenger("keandro", "benitez");

  const flightToMadrid = new Flight();
  const flightToJapon = new Flight();

  passengerOne.addFlight(flightToJapon);
  passengerOne.addFlight(flightToMadrid);

  let flightPassengerOne = passengerOne.countFlights();

  expect(flightPassengerOne).toBe(2);
});

test("Leandro visito 2 veces Parauai", () => {
  //passenger
  const airPortInParauai = new Airport();
  const passOne = new Passenger("Leandro", "Benitez");
  const flightToParauai = new Flight();
  const flightToNose = new Flight();
  passOne.addFlight(flightToParauai);
  passOne.addFlight(flightToNose);
  flightToParauai.setDepartureAirport(airPortInParauai);
  flightToNose.setDepartureAirport(airPortInParauai);

  const parauai = new City("Parauai");
  parauai.addAirport(airPortInParauai);

  expect(passOne.cantVecesQueVisitaste(parauai)).toBe(2);
});
