import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent }      from '../components/landing/landing.component';
import { LoginComponent }      from '../components/login/login.component';
import { RegistroComponent }      from '../components/registro/registro.component';
import { UsuarioComponent } from '../components/usuario/usuario.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'usuario', component: UsuarioComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
