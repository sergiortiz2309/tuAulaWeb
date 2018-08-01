import { Component, OnInit } from '@angular/core';
import {Usuario, Upz} from '../models'
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

  constructor(private tuAulaService : TuAulaService) { }

  ngOnInit() {
    this.selectedIndex = 0;
    this.upzs = this.tuAulaService.getUpzs();
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
