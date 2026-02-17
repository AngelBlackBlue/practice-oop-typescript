// @ts-ignore
import { Persona } from '../src/ejercicio-1-primera-clase'

describe('Ejercicio 1 - Clase Persona', () => {
  test('debe crear una instancia de Persona con nombre y edad', () => {
    const persona = new Persona('Ana', 25);
    expect(persona).toBeInstanceOf(Persona);
  });

  test('debe tener propiedades nombre y edad accesibles', () => {
    const persona = new Persona('Carlos', 30);
    expect(persona.nombre).toBe('Carlos');
    expect(persona.edad).toBe(30);
  });

  test('el método saludar debe retornar el mensaje correcto', () => {
    const persona = new Persona('María', 28);
    expect(persona.saludar()).toBe('Hola, me llamo María y tengo 28 años');
  });
});