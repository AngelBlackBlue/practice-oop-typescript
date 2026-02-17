// Instrucciones: Crea dos enfoques diferentes para modelar un sistema de notificaciones:
// Enfoque A (Herencia):
// Clase base Notificador con método enviar(mensaje: string)
// Clases EmailNotificador y SMSNotificador que heredan y sobrescriben el método
// Enfoque B (Composición):
// Interfaz CanalNotificacion con método enviar(mensaje: string)
// Clases EmailCanal y SMSCanal que implementan la interfaz
// Clase NotificadorComposicion que recibe un canal en el constructor