import { Component, OnInit } from '@angular/core';
import { Upz } from '../../models/upz';
import { Usuario } from '../../models/usuario';
import { Categoria } from '../../models/categoria';
import { UpzsService } from '../../services/upzs.service';
import { CategoriasService } from '../../services/categorias.service';
import { ModalidadesService } from '../../services/modalidades.service';
import { Modalidad } from '../../models/modalidad';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

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

  constructor(upzsService : UpzsService, categoriasService : CategoriasService, modalidadesService : ModalidadesService ) { 
    this.upzsService = upzsService;
    this.categoriasService = categoriasService;
    this.modalidadesService = modalidadesService;
  }

  ngOnInit() {
    this.selectedIndex = 0;
    this.upzsService.getUpzs().subscribe(data =>{ this.upzs = data; });
    this.categoriasService.getCategorias().subscribe(data => this.categorias = data );
    this.modalidadesService.getModalidades().subscribe(data => this.modalidades = data );
  }

  onNext(){
    if (this.selectedIndex <2){
      this.selectedIndex++;
    }
  }

  onBack(){
    if (this.selectedIndex > 0){
      this.selectedIndex--;
    }
  }
}
