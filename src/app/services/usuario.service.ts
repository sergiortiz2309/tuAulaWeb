import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  apiService: any;

  constructor() { }
  getUsuario(): Observable<Usuario> {

    return new Observable( (observer) => {
        observer.next(this.getFakeUsuario())
    });
  }

  private getFakeUsuario(){
    
    let usuario = new Usuario();
    usuario.apellido = "aaa";
    usuario.direccion = "sss";
    usuario.categoriasPreferidas = [{id : 1, nombre : "Idiomas"}];
    usuario.email = "dkdkd";
    usuario.nombre = "cesar";
    return usuario;
  }

}
