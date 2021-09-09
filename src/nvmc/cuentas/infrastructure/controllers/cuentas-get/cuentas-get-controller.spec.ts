import { Test, TestingModule } from '@nestjs/testing';
import { CuentasGetController } from './cuentas-get.controller';

describe('CuentasGetControllerController', () => {
  let controller: CuentasGetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuentasGetController],
    }).compile();

    controller = module.get<CuentasGetController>(CuentasGetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
