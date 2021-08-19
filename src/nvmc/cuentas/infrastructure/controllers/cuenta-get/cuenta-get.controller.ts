import {Controller, Get, Param} from '@nestjs/common';

@Controller('cuentas')
export class CuentaGetController {

    @Get(':id')
    getCuenta(@Param('id') id : string){

        return {
            'mensage' : 'getCuenta',
            'id' : id
        }
    }
}
