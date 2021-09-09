import {Body, Controller, Post} from '@nestjs/common';
import {CuentaPostRequest} from "../../../application/create/cuentaPost.request";
import {CuentaCreator} from "../../../application/create/cuentaCreator";
import {TypeOrmCuentasRepository} from "../../Persistence/typeOrmCuentas.repository";

@Controller('cuentas')
export class CuentaPostController {
    constructor(
                protected readonly creator: CuentaCreator,
                protected readonly repository: TypeOrmCuentasRepository
    ){}

    @Post()
    createCuenta(@Body() params : CuentaPostRequest)
    {
        this.creator.handler(params, this.repository);
        return {
            'mensage': 'createCuenta',
            'params' : params
        }
    }
}
