import {Inject, Injectable} from "@nestjs/common";
import {CuentaPostRequest} from "./cuentaPost.request";
import CuentaFactory from "../factory/cuenta.factory";
import {CuentasRepository} from "../../domain/cuentas.repository";

@Injectable()
export class CuentaCreator {
    constructor( private entity : CuentaFactory, @Inject('CuentasRepository') private readonly repository: CuentasRepository) {}

    handler(request: CuentaPostRequest) {
        const cuenta = this.entity.crearCuenta(request);
        this.repository.create(cuenta);
        console.log('yahooo!!!!', request, cuenta)
    }

}