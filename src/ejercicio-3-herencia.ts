// Instrucciones: Crea una clase base Vehiculo con propiedades marca y modelo, y un método obtenerInfo
// () que retorne "Marca: [marca], Modelo: [modelo]". Luego crea una clase Coche que herede de Vehiculo
//  y añada la propiedad puertas y sobrescriba obtenerInfo() para incluir el número de puertas.

export class Vehiculo {

    marca: string;
    modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    obtenerInfo(): string {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}`;
    }

}

export class Coche extends Vehiculo {
    puertas: number;

    constructor(marca: string, modelo: string, puertas: number) {
        super(marca, modelo);
        this.puertas = puertas;
    }

    // method override
    obtenerInfo(): string {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Puertas: ${this.puertas}`;
    }

}