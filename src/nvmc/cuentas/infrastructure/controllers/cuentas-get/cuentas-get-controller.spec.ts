import { Test, TestingModule } from '@nestjs/testing';
import { CuentasGetController } from './cuentas-get.controller';
import {CuentasInfrastructureModule} from "../../cuentasInfrastructure.module";

describe('CuentasGetController', () => {
  let controller: CuentasGetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CuentasInfrastructureModule],
    }).compile();

    controller = module.get<CuentasGetController>(CuentasGetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
