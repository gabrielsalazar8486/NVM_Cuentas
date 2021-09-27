import {Module} from "@nestjs/common";
import {CuentaPostController} from "./controllers/cuenta-post/cuenta-post.controller";
import {CuentaGetController} from "./controllers/cuenta-get/cuenta-get.controller";
import {CuentasGetController} from "./controllers/cuentas-get/cuentas-get.controller";
import {CuentasAplicationModule} from "../application/cuentasAplication.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CuentaEntity} from "./Entitis/cuenta.enity";
import {TypeOrmCuentasRepository} from "./Persistence/typeOrmCuentas.repository";
import {CuentasModule} from "../cuentas.module";


@Module({
    imports:[
        CuentasAplicationModule,
        TypeOrmModule.forRoot({
            type:'mysql',
            host:'localhost',
            port:3306,
            username: 'mnonline01',
            password: 'mnonline03',
            database:'nvm_cuentas',
            entities:[__dirname + './**/**/*entity{.ts,.js}'],
            autoLoadEntities: true,
            synchronize:true
        }),
        TypeOrmModule.forFeature([CuentaEntity])
    ],
    controllers:[
        CuentaPostController,
        CuentaGetController,
        CuentasGetController
    ],
    providers:[
        TypeOrmCuentasRepository
    ],
    exports:[
        TypeOrmCuentasRepository
    ]
})
export class CuentasInfrastructureModule {}
