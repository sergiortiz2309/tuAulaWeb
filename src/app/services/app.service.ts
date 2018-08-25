import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public currentViewName : string;

  constructor() { 
  }

  public getCurrentViewName() : Observable<string> {
    return new Observable(
      observer => observer.next(this.currentViewName)
    );
  }

  public setCurrentViewName (viewName: string) : void {
    this.currentViewName = viewName;
  }
}
