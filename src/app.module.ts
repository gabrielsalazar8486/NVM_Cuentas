import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CuentasModule } from './nvmc/cuentas/cuentas.module';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [CuentasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
