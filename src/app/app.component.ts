import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
        <p>{{hw}}</p>
        <button [class]="hwClass" (click)="sayHi()">Say Hi!</button>
    `
})
export class AppComponent  {  constructor() {}

  public hw = 'Hello World!';
  public buttonClass = 'special';

  sayHi() {
    console.log('Hi!');
  }
}
