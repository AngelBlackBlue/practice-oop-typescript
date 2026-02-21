// Instrucciones: Crea dos enfoques diferentes para modelar un sistema de notificaciones:
// Enfoque A (Herencia):
// Clase base Notificador con método enviar(mensaje: string)
// Clases EmailNotificador y SMSNotificador que heredan y sobrescriben el método
// Enfoque B (Composición):
// Interfaz CanalNotificacion con método enviar(mensaje: string)
// Clases EmailCanal y SMSCanal que implementan la interfaz
// Clase NotificadorComposicion que recibe un canal en el constructor


//******* Herencia ********//

export class Notificador {

    constructor() { };

    enviar(mensaje: string): string {
        return `El mensaje es ${mensaje}`;
    };

}

export class EmailNotificador extends Notificador {

    email: string;

    constructor(email: string) {
        super();
        this.email = email;
    };

    // Method Override
    enviar(mensaje: string): string {
        return `Enviando email a ${this.email}: ${mensaje}`;
    };
}


export class SMSNotificador extends Notificador {

    sms: string;

    constructor(sms: string) {
        super();
        this.sms = sms
    };

    // Method Override
    enviar(mensaje: string): string {
        return `Enviando SMS a ${this.sms}: ${mensaje}`;
    };
}


//**** Composición ***********/

interface CanalNotificacion {
    enviar(mensaje: string): string;
};

export class EmailCanal implements CanalNotificacion {

    email: string;

    constructor(email: string) {
        this.email = email;
    };

    enviar(mensaje: string): string {
        return `Enviando email a ${this.email}: ${mensaje}`;
    };
}

export class SMSCanal implements CanalNotificacion {

    sms: string;

    constructor(sms:string){
        this.sms=sms;
    };

    enviar(mensaje: string): string {
        return `Enviando SMS a ${this.sms}: ${mensaje}`;
    };
}


export class NotificadorComposicion {

    private canal: CanalNotificacion

    constructor(canal: CanalNotificacion) {
        this.canal = canal;
    }

    enviar(mensaje: string): string {
        return this.canal.enviar(mensaje);
    };

}

const emailCanal = new EmailCanal('angel@gmail.com');

const notificador = new NotificadorComposicion(emailCanal);

console.log(notificador.enviar('Hola'))




