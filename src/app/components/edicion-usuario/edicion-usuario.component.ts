import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuariosService } from '../../services/usuario.service';
import { Upz } from '../../models/upz';
import { Categoria } from '../../models/categoria';
import { Modalidad } from '../../models/modalidad';
import { UpzsService } from '../../services/upzs.service';
import { CategoriasService } from '../../services/categorias.service';
import { ModalidadesService } from '../../services/modalidades.service';

@Component({
  selector: 'app-edicion-usuario',
  templateUrl: './edicion-usuario.component.html',
  styleUrls: ['./edicion-usuario.component.css']
})
export class EdicionUsuarioComponent implements OnInit {

   public usuario = new Usuario();
  repeticionDePassword : string;
  selectedIndex : number;
  upzs : Array<Upz>;
  categorias : Array<Categoria>;
  modalidades : Array<Modalidad>;

  //Services
  upzsService : UpzsService;
  categoriasService : CategoriasService;
  modalidadesService : ModalidadesService;

  constructor(private usuariosService: UsuariosService,
              upzsService : UpzsService, 
              categoriasService : CategoriasService, 
              modalidadesService : ModalidadesService) { 
    this.upzsService = upzsService;
    this.categoriasService = categoriasService;
    this.modalidadesService = modalidadesService;
  }

  ngOnInit() {
    this.upzsService.getUpzs().subscribe(data =>{ this.upzs = data; });
    this.categoriasService.getCategorias().subscribe(data => this.categorias = data );
    this.modalidadesService.getModalidades().subscribe(data => this.modalidades = data );
    this.usuariosService.getUsuario().subscribe(data => this.usuario = data);
  }

}
