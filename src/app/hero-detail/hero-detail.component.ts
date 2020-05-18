import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { HeroService }  from '../hero.service';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  constructor(
    private routeService: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    const id = +this.routeService.snapshot.paramMap.get('id');
    this.heroService.getHeroById(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }

}
