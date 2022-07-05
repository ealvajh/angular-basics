import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CounterComponent } from './counter.component';

@NgModule({
    declarations: [
        // contiene mis componentes creados
        CounterComponent
    ], 
    imports: [
        // traemos -módulos- (casi siempre son módulos)
        CommonModule
    ],
    exports: [
        // algo que quiero hacer público o hacerlo visible para otros módulos.
        CounterComponent
    ],
    providers: [],
})

export class CounterModule {

}