import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CuentasGetControllerController } from './nvmc/cuentas/infrastructure/controllers/cuentas-get-controller/cuentas-get-controller.controller';

@Module({
  imports: [],
  controllers: [AppController, CuentasGetControllerController],
  providers: [AppService],
})
export class AppModule {}
