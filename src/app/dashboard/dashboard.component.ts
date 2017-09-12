import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../shared/services/hero.service';
import { Hero } from '../../shared/model/hero.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [HeroService]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly()
      .then((response) => {
        this.heroes = response;
      });
  }
}
