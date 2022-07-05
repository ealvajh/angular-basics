import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
   // styleUrls: ['./name.component.scss']
})
export class HeroeComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
        
    }

    name: string = "Ironman";
    age: number = 45;

    
     get capitalizeName() : string {
        return this.name.toUpperCase();
    }
    
    getName(): string {
        return `${this.name} - ${this.age}`
    }

    /**
     * One way data binding
     * Consiste en cambiar un valor en el Dom pero una vez ha cambiado Angular lo notá y no ejecuta la instrucción de nuevo.
     */
    changeName(){
        this.name = "Spiderman";
    }

    changeAge(){
        this.age = 30;
    }
}

/**
 * Cuando se crea un component debe estar importado en un módulo.
 */