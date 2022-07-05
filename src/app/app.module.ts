import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Importando mis modulos
import { CounterModule } from './counter-module/counter.module';
import { HeroesModule } from './heroes-module/heroes-module.module';

@NgModule({
  // --> Se importan components.
  declarations: [
    AppComponent,
    // Mis components
    //CounterComponent,
    //HeroesModule
  ],
  // --> Se importan modulos.
  imports: [
    BrowserModule,
    HeroesModule,
    CounterModule
  ],
  providers: [], // Relacionados con servicios a un modulo.
  bootstrap: [AppComponent] // Component principal
})
export class AppModule { }
