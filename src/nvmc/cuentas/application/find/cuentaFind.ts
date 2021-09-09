import {Injectable} from "@nestjs/common";
import CuentaFactory from "../factory/cuenta.factory";
import {CuentasRepository} from "../../domain/cuentas.repository";
import {CuentasGetRequest} from "./cuentasGet.request";

@Injectable()
export class CuentaFind {
    constructor( private entity : CuentaFactory) {}


    async handler(id: string, repository: CuentasRepository)
    {
       return await repository.findOne(id);
    }

}