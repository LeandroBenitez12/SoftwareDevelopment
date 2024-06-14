export class RankeadorDeCiudades {
  ciudadQueMasPasajerosRecibio(dia, ciudades) {
    let ciudadQueMasPasajerosRecibio;
    let cantPasajeros = -9999999;

    ciudades.forEach((c) => {
      if (c.cantPasajeLlegaronEl(dia) > cantPasajeros) {
        cantPasajeros = c.cantPasajeLlegaronEl(dia);
        ciudadQueMasPasajerosRecibio = c;
      }
    });
    return ciudadQueMasPasajerosRecibio;
  }
}
