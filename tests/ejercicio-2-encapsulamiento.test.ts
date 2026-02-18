// @ts-ignore
import { CuentaBancaria } from '../src/ejercicio-2-encapsulamiento';

describe('Ejercicio 2 - Encapsulamiento', () => {
  test('debe crear una cuenta con titular y saldo inicial', () => {
    const cuenta = new CuentaBancaria('Juan Pérez', 1000);
    expect(cuenta.getTitular).toBe('JUAN PÉREZ');
    expect(cuenta.getSaldo).toBe('1000€');
  });

  test('debe permitir modificar el saldo con setter válido', () => {
    const cuenta = new CuentaBancaria('Ana García', 500);
    cuenta.setSaldo = 750;
    expect(cuenta.getSaldo).toBe('750€');
  });

  test('debe lanzar error al intentar establecer saldo negativo', () => {
    const cuenta = new CuentaBancaria('Carlos López', 200);
    expect(() => {
      cuenta.setSaldo = -100;
    }).toThrow('El saldo no puede ser negativo');
  });
});