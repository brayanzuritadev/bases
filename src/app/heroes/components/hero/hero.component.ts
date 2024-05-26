import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  changeHero():void {
    this.name = 'spiderman';
  }

  changeAge():void {
    this.age = 20;
  }

  reset(): void{
    this.name = 'ironman';
    this.age = 45;
  }
}
