import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { BarrainicioComponent } from './barrainicio/barrainicio.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProblemaComponent } from './problema/problema.component';
import { DistrosComponent } from './distros/distros.component';
import { ObjetivoComponent } from './objetivo/objetivo.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BarrainicioComponent,
    ProblemaComponent,
    DistrosComponent,
    ObjetivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
