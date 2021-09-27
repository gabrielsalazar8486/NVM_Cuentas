import { Test, TestingModule } from '@nestjs/testing';
import { CuentaPostController } from './cuenta-post.controller';
import {CuentasInfrastructureModule} from "../../cuentasInfrastructure.module";

describe('CuentaPostController', () => {
  let controller: CuentaPostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[CuentasInfrastructureModule]
    }).compile();

    controller = module.get<CuentaPostController>(CuentaPostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
