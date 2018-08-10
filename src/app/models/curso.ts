import { Clase } from './clase';

export class Curso {
    id: number;
    nombre: string;
    idCategoria : number;
    nombreCategoria : string;
    idModalidad : number;
    nombreModalidad : string;
    clases : Array<Clase>
}
