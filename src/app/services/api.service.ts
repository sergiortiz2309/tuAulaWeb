import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AppSettings } from '../AppSettings';
import { NotifierService } from 'angular-notifier'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public loading : boolean;

  constructor(private httpClient : HttpClient, private notifierService : NotifierService) {}

  get(resource : string): Observable<Object> {

    this.loading = true;
    return new Observable( (observer) => {

      this.httpClient
          .get(`${AppSettings.API_BASEURL}/${resource}`)
          .subscribe(
            data => {
              observer.next(data);
              this.loading = false;
            },
            (errorResponse : HttpErrorResponse) => {
              this.handleError(errorResponse, observer.error)
              this.loading = false;
            } 
          )
    });
  }

  post(resource : string, model : Object): Observable<Object> {

    this.loading = true;
    return new Observable( (observer) => {

      this.httpClient
          .post(`${AppSettings.API_BASEURL}/${resource}`, model)
          .subscribe(
            data => {
              observer.next(data)
              this.loading = false;
            },
            (errorResponse : HttpErrorResponse) => {
              this.handleError(errorResponse, observer.error)
              this.loading = false;
            } 
          )
    });
  }

  put(resource : string, id : number, model : Object): Observable<Object> {

    this.loading = true;
    return new Observable( (observer) => {

      this.loading = true;
      this.httpClient
          .put(`${AppSettings.API_BASEURL}/${resource}`, model)
          .subscribe(
            data => {observer.next(data)
              this.loading = false;
            },
            (errorResponse : HttpErrorResponse) => {
              this.handleError(errorResponse, observer.error)
              this.loading = false;
            } 
          )
    });
  }

  private handleError(errorResponse: HttpErrorResponse, error: any) : void {

    if (errorResponse.error instanceof ErrorEvent){
      this.notifierService.notify("error", "There is no connectivity with the server. Please check your network/internet connection.");
      return;
    } 
    
    if (errorResponse.status != 409){
      this.notifierService.notify("error", "Something went wrong, please contact the system administrator");
      return;
    }

    error(errorResponse);
  }

}
