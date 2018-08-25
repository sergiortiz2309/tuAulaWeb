import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuario = new Usuario();

  constructor(private usuariosService: UsuariosService,
              private appService : AppService) { 
                appService.setCurrentViewName("Mi Cuenta");
              }

  ngOnInit() {
    this.usuariosService.getUsuario().subscribe(data => this.usuario = data);
  }

 
}
