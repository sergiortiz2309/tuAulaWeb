import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Modalidad } from '../models/modalidad';
import { ApiService } from './api.service';
import { AppSettings } from '../AppSettings';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModalidadesService {

  constructor(private apiService : ApiService) { }

  getModalidades(): Observable<Array<Modalidad>> {

    return new Observable( (observer) => {
      this.apiService.get(AppSettings.MODALIDADES_RESOURCE_NAME)
                      .subscribe(
                        (data : Array<Modalidad>) => observer.next(data),
                        (errorResponse: HttpErrorResponse) => observer.error(errorResponse)
                      )
    });
  }
}
