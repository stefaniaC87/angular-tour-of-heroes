import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

constructor(
  private heroService: HeroService
  ) {}

  ngOnInit(){
    /*let scope = this;
    setTimeout(function (){
      scope.hero.name = 'Stefania';
    }, 5000);*/
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
