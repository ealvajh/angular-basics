// Component sin ngOnInit (Lo removimos)
import { Component } from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})


export class ListComponent {

  constructor() { }



  heroes: Heroe[] = [{
    name: 'Spiderman',
    age: 30
  }, 
  {
    name: 'Ironman',
    age: 45
  },
  {
    name: 'Hulk',
    age: 48
  },
  {
    name: 'Thor',
    age: 37
  }];

  heroeDeleted: string = '';

  deleteElement(){  
    let heroe = this.heroes.shift();
    this.heroeDeleted = heroe?.name || '';
  }

}

interface Heroe{
  name: string ;
  age: number;
}
