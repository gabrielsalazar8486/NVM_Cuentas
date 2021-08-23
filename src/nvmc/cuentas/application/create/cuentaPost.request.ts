import {IsNumber, IsString} from "class-validator";

export class CuentaPostRequest {
    @IsString() id: string;
    @IsString() nombre: string;
    @IsString() codigo:string;
    @IsNumber() saldo: number;
}