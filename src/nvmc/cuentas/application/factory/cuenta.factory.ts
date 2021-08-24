import {Injectable} from "@nestjs/common";
import Cuenta from "../../domain/cuenta";
import {CuentaPostRequest} from "../create/cuentaPost.request";

@Injectable()
export default class CuentaFactory {
    public crearCuenta(request : CuentaPostRequest): Cuenta
    {
        return new Cuenta(
            request.id,
            request.codigo,
            request.nombre,
            request.saldo
        );
    }

}