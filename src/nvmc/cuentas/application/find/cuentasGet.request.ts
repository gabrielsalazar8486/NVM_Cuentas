import {CuentaRequest} from "../../../shared/application/cuenta.request";
import {PartialType} from "@nestjs/mapped-types";

export class CuentasGetRequest extends PartialType(CuentaRequest){}