// @ts-ignore
import { Calculadora } from '../src/ejercicio-6-tipos-de-metodos';

describe('Ejercicio 6 - Métodos estáticos y de instancia', () => {
  test('método de instancia sumar debe funcionar', () => {
    const calc = new Calculadora();
    expect(calc.sumar(5, 3)).toBe(8);
  });

  test('método estático multiplicar debe funcionar', () => {
    expect(Calculadora.multiplicar(4, 3)).toBe(12);
  });

  test('propiedad estática versiones debe existir', () => {
    expect(Calculadora.versiones).toBeInstanceOf(Array);
    expect(Calculadora.versiones).toContain('1.0.0');
  });

  test('método estático fromString debe parsear expresiones', () => {
    expect(Calculadora.fromString('5+3')).toBe(8);
    expect(Calculadora.fromString('4*6')).toBe(24);
  });
});