import {Controller, Get} from '@nestjs/common';

@Controller('transacciones')
export class TransaccionesGetControllerController {
    @Get()
    getTransacciones() : string
    {
        return 'transacciones'
    }
}
