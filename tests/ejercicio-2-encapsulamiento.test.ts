// @ts-ignore
import { CuentaBancaria } from '../src/ejercicio-2-encapsulamiento';

describe('Ejercicio 2 - Encapsulamiento', () => {
  test('debe crear una cuenta con titular y saldo inicial', () => {
    const cuenta = new CuentaBancaria('Juan Pérez', 1000);
    expect(cuenta.titular).toBe('JUAN PÉREZ');
    expect(cuenta.saldo).toBe('1000€');
  });

  test('debe permitir modificar el saldo con setter válido', () => {
    const cuenta = new CuentaBancaria('Ana García', 500);
    cuenta.saldo = 750;
    expect(cuenta.saldo).toBe('750€');
  });

  test('debe lanzar error al intentar establecer saldo negativo', () => {
    const cuenta = new CuentaBancaria('Carlos López', 200);
    expect(() => {
      cuenta.saldo = -100;
    }).toThrow('El saldo no puede ser negativo');
  });
});