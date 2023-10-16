import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CargarScriptsService } from "./cargar-scripts.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CargarScriptsService],
  // providers: [],

  bootstrap: [AppComponent]
  
})
export class AppModule { 

  constructor (private _CargaScripts:CargarScriptsService)
  {
    _CargaScripts.Carga(["../assets/CodesJs/scripts.js"]);
  }
}
