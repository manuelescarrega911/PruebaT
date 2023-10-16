import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { CargarScriptsService } from "./../src/app/cargar-scripts.service";

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
