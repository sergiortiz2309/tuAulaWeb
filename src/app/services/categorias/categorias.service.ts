import { Injectable } from '@angular/core';
import { AppSettings } from '../../AppSettings';
import { ApiService } from '../api.service';
import { Observable } from '../../../../node_modules/rxjs';
import { Categoria } from '../../models/categoria';
import { HttpErrorResponse } from '../../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private apiService : ApiService;

  constructor(apiService : ApiService) { 
    this.apiService = apiService
  }

  getCategorias(): Observable<Categoria[]> {

    return new Observable( (observer) => {
      this.apiService.get(AppSettings.CATEGORIAS_RESOURCE_NAME)
                      .subscribe(
                        (data : Array<Categoria>) => observer.next(data),
                        (errorResponse: HttpErrorResponse) => observer.error(errorResponse)
                      )
    });
  }
}
