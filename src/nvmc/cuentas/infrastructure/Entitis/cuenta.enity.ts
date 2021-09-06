import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";

@Entity('cuentas')
export class CuentaEntity{
    @PrimaryColumn({type: 'varchar', length: 255})
    id: string;

    @Column({type: 'varchar', length: 255})
    codigo: string;

    @Column({type: 'varchar', length: 255})
    nombre: string;

    @Column({type: 'float'})
    saldo: number;

    @CreateDateColumn({type:'timestamp'})
    createAt: Date;

    @UpdateDateColumn({type:'timestamp'})
    updateAt: Date;

}