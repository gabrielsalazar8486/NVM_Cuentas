import {Body, Controller, Get} from '@nestjs/common';


@Controller('cuentas')
export class CuentasGetControllerController {

    @Get()
    getCuentas(@Body() params: object)
    {
        return {
            'mensage': 'getCuentas',
            'params' : params,
            'response': 'response'
        }
    }
}
