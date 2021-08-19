import { Test, TestingModule } from '@nestjs/testing';
import { CuentaGetController } from './cuenta-get.controller';

describe('CuentaGetController', () => {
  let controller: CuentaGetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuentaGetController],
    }).compile();

    controller = module.get<CuentaGetController>(CuentaGetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
