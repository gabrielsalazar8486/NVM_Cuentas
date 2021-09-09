import {Injectable} from "@nestjs/common";
import {CuentaPostRequest} from "./cuentaPost.request";
import CuentaFactory from "../factory/cuenta.factory";
import {CuentasRepository} from "../../domain/cuentas.repository";

@Injectable()
export class CuentaCreator {
    constructor( private entity : CuentaFactory) {}

    handler(request: CuentaPostRequest, repository: CuentasRepository) {
        const cuenta = this.entity.crearCuenta(request);
        repository.create(cuenta);
    }

}