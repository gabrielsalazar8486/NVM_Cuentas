import { Module } from '@nestjs/common';
import {TransaccionesGetControllerController} from "../controllers/transacciones-controller/transacciones-get-controller.controller";

@Module({
    controllers:[TransaccionesGetControllerController]
})
export class TransaccionesModule {}
