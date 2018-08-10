import { Injectable } from '@angular/core';
import { AppSettings } from '../AppSettings';
import { Observable } from 'rxjs';
import { Upz } from '../models/upz';
import { ApiService } from './api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpzsService {

  private apiService : ApiService;
  
  constructor(apiService : ApiService) { 
    this.apiService = apiService;
  }

  getUpzs(): Observable<Array<Upz>> {

    return new Observable( (observer) => {
      this.apiService.get(AppSettings.UPZS_RESOURCE_NAME)
                      .subscribe(
                        (data : Upz[]) => observer.next(data),
                        (errorResponse: HttpErrorResponse) => observer.error(errorResponse)
                      )
    });
  }
}
