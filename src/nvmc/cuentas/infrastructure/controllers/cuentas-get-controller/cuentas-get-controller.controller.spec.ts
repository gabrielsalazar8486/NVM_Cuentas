import { Test, TestingModule } from '@nestjs/testing';
import { CuentasGetControllerController } from './cuentas-get-controller.controller';

describe('CuentasGetControllerController', () => {
  let controller: CuentasGetControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuentasGetControllerController],
    }).compile();

    controller = module.get<CuentasGetControllerController>(CuentasGetControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
