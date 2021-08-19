import { Test, TestingModule } from '@nestjs/testing';
import { CuentaPostController } from './cuenta-post.controller';

describe('CuentaPostController', () => {
  let controller: CuentaPostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuentaPostController],
    }).compile();

    controller = module.get<CuentaPostController>(CuentaPostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
