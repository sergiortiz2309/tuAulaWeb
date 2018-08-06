import { Component, OnInit } from '@angular/core';
import {Usuario, Upz, Categoria} from '../models'
import {TuAulaService} from '../tu-aula.service'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario = new Usuario();
  repeticionDePassword : string;
  selectedIndex : number;
  upzs : Array<Upz>;
  categorias : Array<Categoria>;

  constructor(private tuAulaService : TuAulaService) { }

  ngOnInit() {
    this.selectedIndex = 0;
    this.tuAulaService.getUpzs().subscribe(data =>{ this.upzs = data; console.log(this.upzs)});
    this.tuAulaService.getCategorias().subscribe(data => this.categorias = data );
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
