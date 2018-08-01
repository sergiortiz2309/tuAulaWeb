export class Upz {
    id: number;
    nombre: string;
}

export class Modalidad {
    id: number;
    nombre: string;
}

export class Categoria {
    id: number;
    nombre: string;
}

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
    constructor(){
        this.upzsPreferidas = new Array<Upz>();
        this.modalidadesPreferidas = new Array<Modalidad>();
        this.categoriasPreferidas = new Array<Categoria>();
    }
}