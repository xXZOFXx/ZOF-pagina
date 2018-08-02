import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{InicioComponent} from './inicio/inicio.component'
import{ProblemaComponent} from './problema/problema.component'


const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'problema',
    component: ProblemaComponent
  },
  
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
 ]
 @NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
 
 })export class AppRoutingModule { }