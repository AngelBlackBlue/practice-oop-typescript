// @ts-ignore
import { Vehiculo, Coche } from '../src/ejercicio-3-herencia';

describe('Ejercicio 3 - Herencia', () => {
  test('Vehiculo debe tener marca, modelo y método obtenerInfo', () => {
    const vehiculo = new Vehiculo('Toyota', 'Corolla');
    expect(vehiculo.marca).toBe('Toyota');
    expect(vehiculo.modelo).toBe('Corolla');
    expect(vehiculo.obtenerInfo()).toBe('Marca: Toyota, Modelo: Corolla');
  });

  test('Coche debe heredar de Vehiculo y añadir propiedad puertas', () => {
    const coche = new Coche('Ford', 'Focus', 5);
    expect(coche).toBeInstanceOf(Vehiculo);
    expect(coche).toBeInstanceOf(Coche);
    expect(coche.puertas).toBe(5);
  });

  test('Coche debe sobrescribir obtenerInfo para incluir puertas', () => {
    const coche = new Coche('Seat', 'Ibiza', 3);
    expect(coche.obtenerInfo()).toBe('Marca: Seat, Modelo: Ibiza, Puertas: 3');
  });
});