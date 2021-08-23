import {Module} from "@nestjs/common";
import {CuentaPostController} from "./controllers/cuenta-post/cuenta-post.controller";
import {CuentaGetController} from "./controllers/cuenta-get/cuenta-get.controller";
import {CuentasGetControllerController} from "./controllers/cuentas-get/cuentas-get-controller.controller";
import {CuentasAplicationModule} from "../application/cuentasAplication.module";


@Module({
    imports:[
      CuentasAplicationModule
    ],
    controllers:[
        CuentaPostController,
        CuentaGetController,
        CuentasGetControllerController
    ]
})
export class CuentasInfrastructureModule {}
