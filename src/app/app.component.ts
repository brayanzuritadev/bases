import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'mi primera app';
  public count: number = 0;

  incrementByValue():void{
    this.count += 1
  }

  decrementByValue(num: number):void {
    this.count -= num
  }
  resetCounter(){
    this.count = 10;
  }
}
