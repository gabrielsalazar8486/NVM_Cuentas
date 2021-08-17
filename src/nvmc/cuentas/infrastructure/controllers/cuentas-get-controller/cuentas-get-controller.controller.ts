import {Controller, Get, Param} from '@nestjs/common';

@Controller('cuentas')
export class CuentasGetControllerController {
    @Get()
    getCuentas(@Param() params): string
    {
        return 'hi'
    }
}
