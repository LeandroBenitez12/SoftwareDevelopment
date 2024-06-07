import { Airplane } from "../../src/entities/airplane";
import { Passenger } from "../../src/entities/passenger";
import { Flight } from "../../src/entities/flight";

test("introduzco 4 pasajeros en un avion de capacidad 100 y me deberia retornar 4 por el porcentaje de capacidad de asientos ocupaodos", () => {
  const avion777 = new Airplane(100);
  const eze = new Passenger("ezequiel", "escobar");
  const ese = new Passenger("esequiel", "escobar");
  const maria = new Passenger("maria", "escobar");
  const mariano = new Passenger("mariano", "escobar");
  const flightToBresh = new Flight(avion777, "Ezeiza", "Bresh", 202406071400);
  flightToBresh.addPassenger(eze);
  flightToBresh.addPassenger(ese);
  flightToBresh.addPassenger(maria);
  flightToBresh.addPassenger(mariano);
  const capacidad = flightToBresh.capacityOccupiedByPassengers();

  const percentageExpected = 4;

  expect(capacidad).toBe(percentageExpected);
});
