import { Injectable } from '@angular/core';
import { Dashboard } from '../models/dashboard';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardsService {

  constructor() { }

  public getDashboard(): Observable<Dashboard> {

    return new Observable( (observer) => {
        observer.next(this.getFakeDashboard())
    });
  }

  private getFakeDashboard(){
    
    let dashboard : Dashboard = {
      misClases : [
        {
          id : 1, 
          idCurso : 1, 
          nombreCurso : "Curso 1", 
          idUpz : 1, 
          nombreUpz : "UPZ 1", 
          ubicacion : "Ubicacion 1", 
          fechaFinal : new Date(), 
          fechaInicial : new Date()
        },
        {
          id : 2, 
          idCurso : 2, 
          nombreCurso : "Curso 2", 
          idUpz : 1, 
          nombreUpz : "UPZ 1", 
          ubicacion : "Ubicacion 2", 
          fechaFinal : new Date(), 
          fechaInicial : new Date()
        }
      ],
      clasesSugeridas : [
        {
          id : 1,
          idCurso : 2, 
          nombreCurso: "Pintura al oleo",
          idUpz : 1, 
          nombreUpz : "UPZ 1", 
          ubicacion : "Ubicacion 2", 
          fechaFinal : new Date(), 
          fechaInicial : new Date()
        }
      ]
    }
    return dashboard;
  }
}
