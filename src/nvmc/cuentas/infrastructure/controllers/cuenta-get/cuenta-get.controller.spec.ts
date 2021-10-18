import * as request from 'supertest'
import { Test, TestingModule } from '@nestjs/testing';
import { CuentaGetController } from './cuenta-get.controller';
import {CuentasInfrastructureModule} from "../../cuentasInfrastructure.module";
import {INestApplication} from "@nestjs/common";

describe('CuentaGetController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[CuentasInfrastructureModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();

  });

  it(`/GET cuentas findOne`, () => {
    return request(app.getHttpServer())
        .get('/cuentas/1')
        .expect(200)
        .expect({
          mensage: 'getCuenta',
          id: '1',
          response: {
            id: '1',
            codigo: '1.1.1',
            nombre: 'Gabriel',
            saldo: 100.2,
            createAt: '2021-09-09T15:31:11.312Z',
            updateAt: '2021-09-09T15:31:11.312Z'
          }
        });
  });

  afterAll(async () => {
    await app.close();
  });

});
