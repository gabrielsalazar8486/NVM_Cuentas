import {CuentasRepository} from "../../domain/cuentas.repository";
import cuenta from "../../domain/cuenta";
import {InjectRepository} from "@nestjs/typeorm";
import {CuentaEntity} from "../Entitis/cuenta.enity";
import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import any = jasmine.any;

@Injectable()
export class TypeOrmCuentasRepository implements CuentasRepository{
    constructor(@InjectRepository(CuentaEntity) private readonly cuentas: Repository<CuentaEntity>) {}

    async create(new_cuenta: cuenta)
    {
        console.log(new_cuenta);
        let cuenta = this.cuentas.create(new_cuenta as any);
        await this.cuentas.save(cuenta);
    }
    update(cuenta: cuenta)
    {

    }
    find(id: string){

    }
}