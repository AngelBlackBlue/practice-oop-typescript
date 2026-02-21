// Instrucciones: Crea una clase Calculadora que tenga:
// Método de instancia sumar(a: number, b: number): number
// Método estático multiplicar(a: number, b: number): number
// Método estático fromString(expresion: string): number que procese "2+3" o "4*5"
// Propiedad estática versiones: string[] con las versiones disponibles 

export class Calculadora {

    static versiones: string[] = ["1.0.0"];

    constructor() { };

    sumar(a: number, b: number) {
        return a + b;
    }

    static multiplicar(a: number, b: number) {
        return a * b;
    }

    static fromString(expresion: string): number {
        const a: number = Number(expresion[0]);
        const operador: string = expresion[1];
        const b: number = Number(expresion[2]);

        switch (operador) {
            case "+": return a + b
            case "*": return a * b
            default: return 0
        }
    }

}