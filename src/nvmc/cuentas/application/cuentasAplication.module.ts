import {Module} from "@nestjs/common";
import {CuentaCreator} from "./create/cuentaCreator";
import CuentaFactory from "./factory/cuenta.factory";


@Module({
    providers:[
        CuentaFactory,
        CuentaCreator
    ],
    exports:[
        CuentaFactory,
        CuentaCreator
    ]
})
export class CuentasAplicationModule {}
