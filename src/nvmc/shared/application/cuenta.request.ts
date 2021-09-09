import {IsNumber, IsString} from "class-validator";

export class CuentaRequest {
    @IsString() id: string;
    @IsString() nombre: string;
    @IsString() codigo:string;
    @IsNumber() saldo: number;
}