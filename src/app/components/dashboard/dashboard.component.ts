import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Clase } from '../../models/clase';
import { Dashboard } from '../../models/dashboard';
import { DashboardsService } from '../../services/dashboards.service';
import { Curso } from '../../models/curso';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  misClasesColumnsToDisplay = [
    'nombreCurso', 
    'nombreUpz', 
    'fechaInicial', 
    'fechaFinal'
  ];
  
  clasesSugeridasColumnsToDisplay = [
    'nombreCurso', 
    'nombreUpz', 
    'fechaInicial', 
    'fechaFinal'
  ];

  dsMisClases : MatTableDataSource<Clase>;
  @ViewChild(MatPaginator) paginatorMisClase: MatPaginator;
  @ViewChild(MatSort) sortMisClases: MatSort;

  dsClasesSugeridas : MatTableDataSource<Clase>;
  @ViewChild(MatPaginator) paginatorClasesSugeridas: MatPaginator;
  @ViewChild(MatSort) sortClasesSugeridas: MatSort;

  constructor(private appService : AppService,
              private dashboardsService : DashboardsService) {
    this.appService.setCurrentViewName("Dashboard");
  }

  public getDashboard() : void {

    this.dashboardsService
        .getDashboard()
        .subscribe(
          (dashboard : Dashboard) => 
          {
            this.dsMisClases = new MatTableDataSource(dashboard.misClases);
            this.dsMisClases.sort = this.sortMisClases;
            this.dsMisClases.paginator = this.paginatorMisClase;
            //
            this.dsClasesSugeridas = new MatTableDataSource(dashboard.clasesSugeridas);
            this.dsClasesSugeridas.sort = this.sortClasesSugeridas;
            this.dsClasesSugeridas.paginator = this.paginatorClasesSugeridas;
          },
          error => {}
        );
  } 

  ngOnInit() {
    this.getDashboard();
  }

  applyFilter(filterValue: string) {
    this.dsMisClases.filter = filterValue.trim().toLowerCase();

    if (this.dsMisClases.paginator) {
      this.dsMisClases.paginator.firstPage();
    }
  }

}
