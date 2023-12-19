import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'Spiderman';
  public age: number = 17;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return this.name + ' - ' + this.age;
  }

  changeHero(): void {
    this.name = 'Ironman';
    console.log('si se ejecuta el metodo');
  }

  changeAge(): void {
    this.age = 19;
  }

  resetForm() {
    this.name = 'Spiderman';
    this.age = 17;
  }
}
