// @ts-ignore
import { 
  EmailNotificador, 
  SMSNotificador,
  EmailCanal,
  SMSCanal,
  NotificadorComposicion 
// @ts-ignore
} from '../src/ejercicio-7-herencia-vs-composicion';

describe('Ejercicio 7 - Herencia vs Composición', () => {
  describe('Enfoque con Herencia', () => {
    test('EmailNotificador debe enviar emails', () => {
      const notificador = new EmailNotificador('test@test.com');
      expect(notificador.enviar('Mensaje de prueba')).toBe(
        'Enviando email a test@test.com: Mensaje de prueba'
      );
    });

    test('SMSNotificador debe enviar SMS', () => {
      const notificador = new SMSNotificador('123456789');
      expect(notificador.enviar('Mensaje de prueba')).toBe(
        'Enviando SMS a 123456789: Mensaje de prueba'
      );
    });
  });

  describe('Enfoque con Composición', () => {
    test('NotificadorComposicion debe usar el canal proporcionado', () => {
      const canalEmail = new EmailCanal('test@test.com');
      const notificador = new NotificadorComposicion(canalEmail);
      
      expect(notificador.enviar('Mensaje')).toBe(
        'Enviando email a test@test.com: Mensaje'
      );
    });

    test('debe poder cambiar el canal dinámicamente', () => {
      const canalEmail = new EmailCanal('test@test.com');
      const canalSMS = new SMSCanal('123456789');
      const notificador = new NotificadorComposicion(canalEmail);
      
      expect(notificador.enviar('Primero')).toBe(
        'Enviando email a test@test.com: Primero'
      );
      
      // Cambiamos el canal
      notificador.canal = canalSMS;
      expect(notificador.enviar('Segundo')).toBe(
        'Enviando SMS a 123456789: Segundo'
      );
    });
  });
});