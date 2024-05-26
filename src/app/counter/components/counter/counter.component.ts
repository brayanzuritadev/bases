import { Component } from "@angular/core";


@Component ({
  selector: "app-counter",
  templateUrl: "./counter.component.html"
})
export class CounterComponent {
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
