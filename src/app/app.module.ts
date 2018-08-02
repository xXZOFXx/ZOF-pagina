import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { BarrainicioComponent } from './barrainicio/barrainicio.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProblemaComponent } from './problema/problema.component';
import { DistrosComponent } from './distros/distros.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BarrainicioComponent,
    ProblemaComponent,
    DistrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
