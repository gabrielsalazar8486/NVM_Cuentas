import {Injectable} from "@nestjs/common";
import {CuentaPostRequest} from "./cuentaPost.request";
import CuentaFactory from "../factory/cuenta.factory";

@Injectable()
export class CuentaCreator {
    constructor( private entity : CuentaFactory) {}

    handler(request: CuentaPostRequest) {
        const cuenta = this.entity.crearCuenta(request)
        console.log('yahooo!!!!', request, cuenta)
    }

}