import { Test, TestingModule } from '@nestjs/testing';
import { TransaccionesGetControllerController } from './transacciones-get-controller.controller';

describe('TransaccionesGetControllerController', () => {
  let controller: TransaccionesGetControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransaccionesGetControllerController],
    }).compile();

    controller = module.get<TransaccionesGetControllerController>(TransaccionesGetControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
