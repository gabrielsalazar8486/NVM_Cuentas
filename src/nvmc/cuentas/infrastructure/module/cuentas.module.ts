import { Module } from '@nestjs/common';
import {CuentasGetControllerController} from "../controllers/cuentas-get/cuentas-get-controller.controller";
import {CuentaGetController} from "../controllers/cuenta-get/cuenta-get.controller";
import {CuentaPostController} from "../controllers/cuenta-post/cuenta-post.controller";

@Module({
    controllers:[
        CuentasGetControllerController,
        CuentaGetController,
        CuentaPostController
    ]
})
export class CuentasModule {}
