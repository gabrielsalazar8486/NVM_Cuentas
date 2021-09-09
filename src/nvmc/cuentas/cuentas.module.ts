import { Module } from '@nestjs/common';
import {CuentasInfrastructureModule} from "./infrastructure/cuentasInfrastructure.module";

@Module({
    imports:[
        CuentasInfrastructureModule,
    ]
})
export class CuentasModule {}
