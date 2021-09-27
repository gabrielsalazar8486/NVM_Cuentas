import { Test, TestingModule } from '@nestjs/testing';
import { CuentaGetController } from './cuenta-get.controller';
import {CuentasInfrastructureModule} from "../../cuentasInfrastructure.module";

describe('CuentaGetController', () => {
  let controller: CuentaGetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[CuentasInfrastructureModule],
    }).compile();

    controller = module.get<CuentaGetController>(CuentaGetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
