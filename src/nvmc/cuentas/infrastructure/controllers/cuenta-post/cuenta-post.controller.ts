import {Body, Controller, Post} from '@nestjs/common';
import {CuentaPostRequest} from "../../../application/create/cuentaPost.request";
import {CuentaCreator} from "../../../application/create/cuentaCreator";

@Controller('cuentas')
export class CuentaPostController {
    constructor(protected readonly creator: CuentaCreator){}

    @Post()
    createCuenta(@Body() params : CuentaPostRequest)
    {
        this.creator.invoke()
        return {
            'mensage': 'createCuenta',
            'params' : params
        }
    }
}
