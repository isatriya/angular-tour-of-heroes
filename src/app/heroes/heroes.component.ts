import { Component, OnInit } from '@angular/core';
import { Hero } from '../../shared/model/hero.model';
import { HeroService } from '../../shared/services/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService ]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly()
      .then((response) => {
        this.heroes = response;
      });
  }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}

