import {Injectable} from "@nestjs/common";
import CuentaFactory from "../factory/cuenta.factory";
import {CuentasRepository} from "../../domain/cuentas.repository";
import {CuentasGetRequest} from "./cuentasGet.request";

@Injectable()
export class CuentasFind {
    constructor( private entity : CuentaFactory) {}


    async handler(request: CuentasGetRequest, repository: CuentasRepository)
    {
       return  await repository.find();
    }

}