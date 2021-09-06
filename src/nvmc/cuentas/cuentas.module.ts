import { Module } from '@nestjs/common';
import {CuentasInfrastructureModule} from "./infrastructure/cuentasInfrastructure.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CuentaEntity} from "./infrastructure/Entitis/cuenta.enity";
@Module({
    imports:[
        CuentasInfrastructureModule,
        TypeOrmModule.forFeature([CuentaEntity])
    ]
})
export class CuentasModule {}
