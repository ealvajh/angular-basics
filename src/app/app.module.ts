import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Importando mi component
import { CounterComponent } from './counter-module/counter.component';
import { HeroeComponent } from './heroes-module/heroe/heroe.component';
import { ListComponent } from './heroes-module/list/list.component';

@NgModule({
  // --> Se importan components.
  declarations: [
    AppComponent,
    // Mis components
    CounterComponent,
    HeroeComponent,
    ListComponent
  ],
  // --> Se importan modulos.
  imports: [
    BrowserModule
  ],
  providers: [], // Relacionados con servicios a un modulo.
  bootstrap: [AppComponent] // Component principal
})
export class AppModule { }
