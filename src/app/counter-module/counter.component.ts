import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
       
        <p>{{ title }}</p>

        <p>La base es: {{ base }}</p>

        <button (click)=" acumular(+base) "> +{{ base }} </button>

        <span> {{ count }} </span>

        <button (click)=" acumular(-base) "> -{{ base }} </button>
    
    `
})

export class CounterComponent {
    title = 'Contador App';
    count: number = 0;
    base: number = 5;
  
    acumular( value: number ){
      this.count += value;
    } 
}

