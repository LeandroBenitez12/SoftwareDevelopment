import { City } from "../../src/entities/city";
import { Airport } from "../../src/entities/airport";
import { Passenger } from "../../src/entities/passenger";
import { Flight } from "../../src/entities/flight";

test("Madrid has two airports", () => {
  const madrid = new City("madrid");
  const anAirport = new Airport();
  const otherAirport = new Airport();

  madrid.addAirport(anAirport);
  madrid.addAirport(otherAirport);

  expect(madrid.countAirports()).toBe(2);
});

test("Madrid had tree visitants", () => {
  const madrid = new City("madrid");
  const anAirport = new Airport();

  madrid.addAirport(anAirport);

  //passenger
  const passOne = new Passenger("Leandro", "Benitez");
  const passTwo = new Passenger("Leo", "Benitez");
  const passThree = new Passenger("Lesssdo", "Benitez");
  // agrego vuelos que arribaron al aeropuerto
  const flightOne = new Flight();
  const flightTwo = new Flight();

  flightOne.addPassenger(passOne);
  flightOne.addPassenger(passThree);
  flightOne.setArrivalAirport(anAirport);
  flightOne.setArrivalDateTime("10");

  flightTwo.addPassenger(passTwo);
  flightTwo.setArrivalAirport(anAirport);
  flightTwo.setArrivalDateTime("10");

  anAirport.addFlights(flightOne);
  anAirport.addFlights(flightTwo);

  expect(madrid.cantidadPasajerosQueLlegaron("10")).toBe(3);
});
