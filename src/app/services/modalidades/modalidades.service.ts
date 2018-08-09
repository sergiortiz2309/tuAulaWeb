import { Injectable } from '@angular/core';
import { AppSettings } from '../../AppSettings';
import { Modalidad } from '../../models/modalidad';
import { Observable } from '../../../../node_modules/rxjs';
import { ApiService } from '../api.service';
import { HttpErrorResponse } from '../../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModalidadesService {

  private apiService : ApiService;

  constructor(apiService : ApiService) { 
    this.apiService = apiService;
  }

  getModalidades(): Observable<Array<Modalidad>> {

    return new Observable( (observer) => {
      this.apiService.get(AppSettings.CATEGORIAS_RESOURCE_NAME)
                      .subscribe(
                        (data : Array<Modalidad>) => observer.next(data),
                        (errorResponse: HttpErrorResponse) => observer.error(errorResponse)
                      )
    });
  }
}
