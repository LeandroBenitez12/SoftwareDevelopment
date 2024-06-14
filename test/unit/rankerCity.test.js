import { City } from "../../src/entities/city";
import { Airport } from "../../src/entities/airport";
import { Passenger } from "../../src/entities/passenger";
import { Flight } from "../../src/entities/flight";
import { RankeadorDeCiudades } from "../../src/entities/rankerCityVisited";


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


  let cityBigherVisited = new RankeadorDeCiudades();
  cityBigherVisited.ciudadQueMasPasajerosRecibio()
  expect(madrid.cantidadPasajerosQueLlegaron("10")).toBe(3);
});
