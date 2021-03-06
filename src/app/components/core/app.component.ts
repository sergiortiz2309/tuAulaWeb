import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  sidenavOpened : boolean;
  showToolbar : boolean;
  userLogedIn : boolean;

  constructor(public appService: AppService,
              public apiService: ApiService, 
              private router : Router ) {
  }

  ngOnInit(): void {
      this.router
            .events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe( () => {
              this.showToolbar = true;
              this.userLogedIn = true;
              if (this.router.url == "/"){
                this.showToolbar = false;
              } 
              if (this.router.url == "/" || this.router.url == "/login" || this.router.url == "/registro"){
                this.sidenavOpened = false;
                this.userLogedIn = false;
              } 
            })
  }
}
