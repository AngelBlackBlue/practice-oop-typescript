// @ts-ignore
import { Usuario } from '../src/ejercicio-5-privacidad';

describe('Ejercicio 5 - Privacidad con #', () => {
  test('debe crear usuario y verificar password correctamente', () => {
    const usuario = new Usuario('admin', '12345');
    expect(usuario.verificarPassword('12345')).toBe(true);
    expect(usuario.verificarPassword('incorrecto')).toBe(false);
  });

  test('debe contar intentos fallidos', () => {
    const usuario = new Usuario('test', 'pass');
    usuario.verificarPassword('wrong1');
    usuario.verificarPassword('wrong2');
    expect(usuario.intentosFallidos).toBe(2);
  });

  test('debe bloquear después de 3 intentos fallidos', () => {
    const usuario = new Usuario('test2', 'secreto');
    usuario.verificarPassword('mal1');
    usuario.verificarPassword('mal2');
    usuario.verificarPassword('mal3');
    expect(usuario.estaBloqueado()).toBe(true);
    expect(usuario.verificarPassword('secreto')).toBe(false); // No debería poder verificar si está bloqueado
  });

});