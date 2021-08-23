import {Module} from "@nestjs/common";
import {CuentaCreator} from "./create/cuentaCreator";


@Module({
    providers:[
        CuentaCreator,
    ],
    exports:[
        CuentaCreator
    ]
})
export class CuentasAplicationModule {}
