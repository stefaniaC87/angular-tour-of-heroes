import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  //metodo che restituisce un array
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
