import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiBaseUrl : string = "https://tuaulaapi.herokuapp.com";
  // private apiBaseUrl : string = "http://localhost:3000";

  constructor(private httpClient : HttpClient) {}

  get(resource : string): Observable<Object> {

    return new Observable( (observer) => {

      this.httpClient
          .get(`${this.apiBaseUrl}/${resource}`)
          .subscribe(
            data => observer.next(data),
            (errorResponse : HttpErrorResponse) => {this.handleError(errorResponse, observer.error)} 
          )
    });
  }

  post(resource : string, model : Object): Observable<Object> {

    return new Observable( (observer) => {

      this.httpClient
          .post(`${this.apiBaseUrl}/${resource}`, model)
          .subscribe(
            data => observer.next(data),
            (errorResponse : HttpErrorResponse) => {this.handleError(errorResponse, observer.error)} 
          )
    });
  }

  put(resource : string, id : number, model : Object): Observable<Object> {

    return new Observable( (observer) => {

      this.httpClient
          .put(`${this.apiBaseUrl}/${resource}`, model)
          .subscribe(
            data => observer.next(data),
            (errorResponse : HttpErrorResponse) => {this.handleError(errorResponse, observer.error)} 
          )
    });
  }

  private handleError(errorResponse: HttpErrorResponse, error: any) : void {

    if (errorResponse.error instanceof ErrorEvent){
      console.log(`Client Error: ${errorResponse.message}`);
      error(null);
      return;
    }

    console.log(`Server Error: ${errorResponse.message}`);
  }

}
