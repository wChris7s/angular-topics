import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "Joker";
  public age: number = 45;

  public get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  public changeHero(): void {
    this.name = "Batman";
  }

  public changeAge(): void {
    this.age = 42;
  }

  public resetForm() :void {
    this.name = "Joker";
    this.age = 45;
  }
}
