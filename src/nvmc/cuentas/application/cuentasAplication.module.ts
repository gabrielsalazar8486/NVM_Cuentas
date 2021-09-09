import {Module} from "@nestjs/common";
import {CuentaCreator} from "./create/cuentaCreator";
import CuentaFactory from "./factory/cuenta.factory";
import {TypeOrmCuentasRepository} from "../infrastructure/Persistence/typeOrmCuentas.repository";


@Module({
    providers:[
        CuentaFactory,
        CuentaCreator,
        {
            provide: 'CuentasRepository',
            useClass: TypeOrmCuentasRepository
        }
    ],
    exports:[
        CuentaFactory,
        CuentaCreator
    ]
})
export class CuentasAplicationModule {}
