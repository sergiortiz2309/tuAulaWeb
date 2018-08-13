import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuario = new Usuario();

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.usuariosService.getUsuario().subscribe(data => this.usuario = data);
  }
}
