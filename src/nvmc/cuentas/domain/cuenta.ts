export default class Cuenta {

    protected id?: string;
    protected codigo: string;
    protected nombre: string;
    protected saldo: number;

    constructor(
        id : string,
        codigo: string,
        nombre: string,
        saldo: number
    )
    {
        this.id = id;
        this.codigo = codigo;
        this.nombre = nombre;
        this.saldo = saldo;
    }

}