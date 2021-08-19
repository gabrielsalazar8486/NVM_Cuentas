import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransaccionesGetControllerController } from './nvmc/transacciones/infrastructure/controllers/transacciones-controller/transacciones-get-controller.controller';
import { CuentasModule } from './nvmc/cuentas/infrastructure/module/cuentas.module';
import { TransaccionesModule } from './nvmc/transacciones/infrastructure/module/transacciones.module';

@Module({
  imports: [CuentasModule, TransaccionesModule],
  controllers: [AppController, TransaccionesGetControllerController],
  providers: [AppService],
})
export class AppModule {}
