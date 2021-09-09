import cuenta from "./cuenta";

export interface CuentasRepository {
    create(cuenta: cuenta)
    update(cuenta: cuenta)
    find(id: string)
}