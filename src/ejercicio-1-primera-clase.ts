// Instrucciones: Crea una clase Persona con propiedades nombre (string) y edad (number). 
// Incluye un constructor que inicialice estas propiedades y un método saludar() que retorne 
// un string con el formato: "Hola, me llamo [nombre] y tengo [edad] años".

export class Persona {
    nombre: string;
    edad: number;
  
    constructor(nombre: string, edad: number) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludar(): string {
      return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años`;
    }
}
    

const persona = new Persona("Angel", 30);
console.log(persona.saludar());