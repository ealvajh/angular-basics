import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contador App';
  count: number = 0;
  base: number = 5;

  acumular( value: number ){
    this.count += value;
  }

}
