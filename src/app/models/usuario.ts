import { Upz } from './upz';
import { Categoria } from './categoria';
import { Modalidad } from './modalidad';
import { Clase } from './clase';

export class Usuario {
    id: number;
    email: string;
    password: string;
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    fechaDeNacimiento: Date;
    upzsPreferidas: Array<Upz>;
    modalidadesPreferidas: Array<Modalidad>;
    categoriasPreferidas: Array<Categoria>;
    clases : Array<Clase>;
    constructor(){
        this.upzsPreferidas = new Array<Upz>();
        this.modalidadesPreferidas = new Array<Modalidad>();
        this.categoriasPreferidas = new Array<Categoria>();
    }
}