import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public HeroNames: String[] = ['Spiderman', 'Ironman', 'Hulk', 'Eve'];
  public deletedHero?: String;

  removeLastHero(): void {
    this.deletedHero = this.HeroNames.pop();
  }
}
