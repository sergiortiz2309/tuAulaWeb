import { Injectable } from '@angular/core';
import { Upz, Categoria } from './models'
import { MOCK_UPZS } from './mocks';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service'
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TuAulaService {

  private upzsPath : string = "upzs";
  private categoriasPath : string = "categoria";

  constructor(private apiService : ApiService) { }

  getUpzs(): Observable<Array<Upz>> {

    return new Observable( (observer) => {
      this.apiService.get("upzs")
                      .subscribe(
                        (data : Upz[]) => observer.next(data),
                        (errorResponse: HttpErrorResponse) => observer.error(errorResponse)
                      )
    });
  }

  getCategorias(): Observable<Categoria[]> {

    return new Observable( (observer) => {
      this.apiService.get("categoria")
                      .subscribe(
                        (data : Upz[]) => observer.next(data),
                        (errorResponse: HttpErrorResponse) => observer.error(errorResponse)
                      )
    });
  }

}
