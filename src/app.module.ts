import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CuentasModule } from './nvmc/cuentas/cuentas.module';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [CuentasModule,
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
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
