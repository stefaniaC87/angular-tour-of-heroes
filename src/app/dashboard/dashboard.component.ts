import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private httpService: HttpClient,
    private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    let httpObservable: Observable<any> =  this.httpService.get<any>('https://jsonplaceholder.typicode.com/posts');
    httpObservable.subscribe(response => console.log(response));
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
