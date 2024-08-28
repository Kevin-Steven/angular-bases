import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public nameHeroes: string[] = ['Superman', 'Ironman', 'Hulk', 'She Hulk', 'Thor']
  public deleteHero?: string;

  removeLastHero(): void {
    this.deleteHero = this.nameHeroes.pop()
  }

}
