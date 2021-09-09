import {Module} from "@nestjs/common";
import {CuentaPostController} from "./controllers/cuenta-post/cuenta-post.controller";
import {CuentaGetController} from "./controllers/cuenta-get/cuenta-get.controller";
import {CuentasGetControllerController} from "./controllers/cuentas-get/cuentas-get-controller.controller";
import {CuentasAplicationModule} from "../application/cuentasAplication.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CuentaEntity} from "./Entitis/cuenta.enity";
import {TypeOrmCuentasRepository} from "./Persistence/typeOrmCuentas.repository";


@Module({
    imports:[
        CuentasAplicationModule,
        TypeOrmModule.forFeature([CuentaEntity])
    ],
    controllers:[
        CuentaPostController,
        CuentaGetController,
        CuentasGetControllerController
    ],
    providers:[
        TypeOrmCuentasRepository
    ],
    exports:[
        TypeOrmCuentasRepository
    ]
})
export class CuentasInfrastructureModule {}
