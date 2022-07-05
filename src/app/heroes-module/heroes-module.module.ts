import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe/heroe.component';
import { ListComponent } from './list/list.component';

@NgModule({
    declarations: [
        // contiene mis componentes creados
        HeroeComponent,
        ListComponent
    ],
    imports: [ 
        // traemos -módulos- (casi siempre son módulos)
        // *CommonModule contiene instrucciones propias de angular (directivas).
        CommonModule 
    ],
    exports: [
        // algo que quiero hacer público o hacerlo visible para otros módulos.
        HeroeComponent,
        ListComponent
    ],
    providers: [],
})
export class HeroesModule {}