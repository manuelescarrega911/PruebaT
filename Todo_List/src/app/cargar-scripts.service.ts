import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptsService {

  constructor() { }

  Carga (Archivos:string[])
  {
    for(const archivo of Archivos)
    {
      const script = document.createElement("script");
      script.src = archivo;
      const body = document.getElementsByTagName("body")[0];
      body.appendChild( script );
    }
  }


}
