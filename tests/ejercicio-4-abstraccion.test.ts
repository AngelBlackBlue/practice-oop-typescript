// @ts-ignore
import { Circulo, Rectangulo } from '../src/ejercicio-4-abstraccion';

describe('Ejercicio 4 - Abstracción', () => {
  test('Circulo debe calcular área correctamente', () => {
    const circulo = new Circulo(5);
    expect(circulo.calcularArea()).toBeCloseTo(78.54, 2);
    expect(circulo.descripcion()).toBe('Soy una figura geométrica');
  });

  test('Rectangulo debe calcular área correctamente', () => {
    const rectangulo = new Rectangulo(4, 6);
    expect(rectangulo.calcularArea()).toBe(24);
    expect(rectangulo.descripcion()).toBe('Soy una figura geométrica');
  });

  test('No se debe poder instanciar la clase abstracta', () => {
    expect(() => {
      // @ts-ignore - Probamos que no se pueda instanciar
      new FiguraGeometrica();
    }).toThrow();
  });
});