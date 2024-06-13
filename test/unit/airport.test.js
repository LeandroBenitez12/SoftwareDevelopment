import { Flight } from "../../src/entities/flight";
import { Airport } from "../../src/entities/airport";

test("3 vuelos llegan a el aeropuerto el dia 10-10-10", () => {
  const flight = new Flight();
  const anAirport = new Airport();
  flight.setArrivalAirport(anAirport);

  const flightTwo = new Flight();
  flightTwo.setArrivalAirport(anAirport);

  const flightThree = new Flight();

  flightThree.setArrivalDateTime("10-10-10");
  flightTwo.setArrivalDateTime("10-10-10");
  flight.setArrivalDateTime("10-10-10");

  anAirport.addFlights(flightThree);
  anAirport.addFlights(flightTwo);
  anAirport.addFlights(flight);
  flightThree.setArrivalAirport(anAirport);
  let countArrivedFlights = anAirport.getCountArrivedFlights("10-10-10");
  expect(countArrivedFlights).toBe(3);
});

test("2 vuelos salen del aeropuerto el dia 10-10-10", () => {
  const flight = new Flight();
  const flightTwo = new Flight();
  const flightThree = new Flight();

  const anAirport = new Airport();
  flight.setDepartureAirport(anAirport);
  flightTwo.setDepartureAirport(anAirport);
  flightThree.setDepartureAirport(anAirport);
  anAirport.addFlights(flightThree);
  anAirport.addFlights(flightTwo);
  anAirport.addFlights(flight);

  flightThree.setDepartureDateTime("10-10-10");
  flightTwo.setDepartureDateTime("10-10-10");
  flight.setDepartureDateTime("10-10-11");

  let countDepartureFlights = anAirport.getCountDepartureFlights("10-10-10");
  expect(countDepartureFlights).toBe(2);
});
