import {Body, Controller, Post} from '@nestjs/common';

@Controller('cuentas')
export class CuentaPostController {

    @Post()
    createCuenta(@Body() params : object)
    {
        return {
            'mensage': 'createCuenta',
            'params' : params
        }
    }
}
