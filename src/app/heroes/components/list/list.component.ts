import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  heroNames: string[] = [
    'Hulk',
    'Spiderman',
    'Thor',
    'Ironman'
  ]

  public deletedHero?:string;

  removeClassHero():void {
    this.deletedHero = this.heroNames.pop();
  }
}
