import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age:  number = 45;

  get capitalizeName():string {
    return this.name.toUpperCase();
  }

  getHeroName():string {
    return `${this.name} - ${this.age}`;
  }

  changeName():void {
    this.name = 'Spiderman';
  }

  changeAge():void {
    this.age = 25;
  }

  reset():void {
    this.name = 'ironman';
    this.age = 45;
  }
}
