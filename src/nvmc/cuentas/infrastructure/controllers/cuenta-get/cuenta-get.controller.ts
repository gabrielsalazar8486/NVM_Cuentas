import {Controller, Get, Param} from '@nestjs/common';
import {TypeOrmCuentasRepository} from "../../Persistence/typeOrmCuentas.repository";
import {CuentaFind} from "../../../application/find/cuentaFind";

@Controller('cuentas')
export class CuentaGetController {

    constructor(
        protected readonly find: CuentaFind,
        protected readonly repository: TypeOrmCuentasRepository
    ){}

    @Get(':id')
    async getCuenta(@Param('id') id : string){

        let response = await this.find.handler(id, this.repository);

        return {
            'mensage' : 'getCuenta',
            'id' : id,
            'response': response
        }
    }
}
