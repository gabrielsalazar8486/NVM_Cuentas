import {Module} from "@nestjs/common";
import {CuentaCreator} from "./create/cuentaCreator";
import CuentaFactory from "./factory/cuenta.factory";
import {CuentasFind} from "./find/cuentasFind";
import {CuentaFind} from "./find/cuentaFind";


@Module({
    providers:[
        CuentaFactory,
        CuentaCreator,
        CuentasFind,
        CuentaFind,
    ],
    exports:[
        CuentaFactory,
        CuentaCreator,
        CuentasFind,
        CuentaFind
    ]
})
export class CuentasAplicationModule {}
