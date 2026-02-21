// Instrucciones: Usando la sintaxis moderna de TypeScript (con #), crea una clase Usuario que tenga:
// Propiedad privada #password
// Propiedad privada #intentosFallidos
// Método verificarPassword(password: string): boolean que incremente #intentosFallidos si falla
// Método estaBloqueado(): boolean que retorne true si #intentosFallidos >= 3
// Getter para intentosFallidos (solo lectura)

export class Usuario {
    usuario: string;
    #password: string;
    #intentosFallidos: number = 0;

    constructor(usuario: string, password: string) {
        this.usuario = usuario;
        this.#password = password;
     }

    verificarPassword(password: string): boolean {

        if (this.#password === password && this.#intentosFallidos < 3) {
            return true
        }

        this.#intentosFallidos += 1;
        return false
    }

    estaBloqueado(): boolean {
        if (this.#intentosFallidos >= 3) {
            return true;
        }
        return false
    }

    get intentosFallidos(): number {
        return this.#intentosFallidos;
    }

}



