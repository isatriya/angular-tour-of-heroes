import { Injectable } from '@angular/core';

import { HEROES } from '../local-data/mock-heroes';
import { Hero } from '../model/hero.model';

@Injectable()
export class HeroService {
  constructor() { }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.getHeroes());
      }, 1000);
    });
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then((response) => response.find((hero) => hero.id === id));
  }
}
