import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

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
    usuario.apellido = "Ortiz";
    usuario.direccion = "Calle falsa 123";
    usuario.categoriasPreferidas = [{id : 1, nombre : "Idiomas"}];
    usuario.email = "abc@gmail.com";
    usuario.telefono = "300 500 2001"
    usuario.nombre = "Cesar";
    return usuario;
  }

}
