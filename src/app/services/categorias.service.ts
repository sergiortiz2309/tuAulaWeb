import { Injectable } from '@angular/core';
import { AppSettings } from '../AppSettings';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private apiService : ApiService;

  constructor(apiService : ApiService) { 
    this.apiService = apiService
  }

  getCategorias(): Observable<Array<Categoria>> {

    return new Observable( (observer) => {
      this.apiService.get(AppSettings.CATEGORIAS_RESOURCE_NAME)
                      .subscribe(
                        (data : Array<Categoria>) => observer.next(data),
                        (errorResponse: HttpErrorResponse) => observer.error(errorResponse)
                      )
    });
  }
}
