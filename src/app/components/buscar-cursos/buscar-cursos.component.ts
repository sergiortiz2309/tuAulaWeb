import { Component, OnInit } from '@angular/core';
import { Upz } from '../../models/upz';
import { UpzsService } from '../../services/upzs.service';
import { CategoriasService } from '../../services/categorias.service';
import { Categoria } from '../../models/categoria';

export interface Clases {
  nombre: string;
  modalidad: string;
  categoria: string;
  duracion: string;
}

const ELEMENT_DATA: Clases[] = [
  {nombre: 'Inglés Básico', modalidad: 'Virtual', categoria: 'Idiomas', duracion: '20h'}
];

@Component({
  selector: 'app-buscar-cursos',
  templateUrl: './buscar-cursos.component.html',
  styleUrls: ['./buscar-cursos.component.css']
})
export class BuscarCursosComponent implements OnInit {

  upzs : Array<Upz>;
  categorias : Array<Categoria>;

  //services
  
  upzsService : UpzsService;
  categoriasService : CategoriasService;

  // Table Data

  displayedColumns: string[] = ['nombre', 'modalidad', 'categoria', 'duracion'];
  dataSource = ELEMENT_DATA;

  constructor(upzsService : UpzsService, categoriasService : CategoriasService) { 
    this.upzsService = upzsService;
    this.categoriasService = categoriasService;
  }

  ngOnInit() {
    this.upzsService.getUpzs().subscribe(data =>{ this.upzs = data; });
    this.categoriasService.getCategorias().subscribe(data => this.categorias = data );
  }

}
