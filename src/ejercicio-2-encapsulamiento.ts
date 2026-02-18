// Instrucciones: Crea una clase CuentaBancaria con propiedades privadas _saldo y _titular. Implementa getters y setters para saldo que:
// El getter debe retornar el saldo formateado como string con el símbolo €
// El setter debe validar que el nuevo saldo no sea negativo (lanzar error si lo es)
// El getter de titular debe retornar el nombre en mayúsculas

export class CuentaBancaria {
    private _saldo: number;
    private _titular: string;

    constructor(titular: string, saldo: number) {
        this._titular = titular;
        this._saldo = saldo;
    }

    set setSaldo(saldo: number) {
        if (saldo < 0) {
            throw new Error("El saldo no puede ser negativo");
        }
        this._saldo = saldo;
    }

    get getSaldo(): string {
        return `${this._saldo}€`;
    }

    set setTitular(titular: string) {
        this._titular = titular;
    }

    get getTitular(): string {
        return this._titular.toUpperCase();
    }
}

const cuenta = new CuentaBancaria('Juan', 1000);
console.log(cuenta.getTitular);
console.log(cuenta.getSaldo);

