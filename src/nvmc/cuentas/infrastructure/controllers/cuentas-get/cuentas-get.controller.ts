import {Body, Controller, Get} from '@nestjs/common';
import {TypeOrmCuentasRepository} from "../../Persistence/typeOrmCuentas.repository";
import {CuentasFind} from "../../../application/find/cuentasFind";
import {CuentasGetRequest} from "../../../application/find/cuentasGet.request";


@Controller('cuentas')
export class CuentasGetController {

    constructor(
        protected readonly find: CuentasFind,
        protected readonly repository: TypeOrmCuentasRepository
    ){}

    @Get()
    async getCuentas(@Body() params: CuentasGetRequest)
    {
        let response = await this.find.handler(params, this.repository);

        return {
            'mensage': 'getCuentas',
            'params' : params,
            'response': response
        }
    }
}
