import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes;
  optionList = [10, 50, 100, 200, 500, 1000, 2500];
  limit = 10;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes = this.heroService.getLimitedHeros(this.limit);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  handleQuantityChange(event) {
    this.limit = event.target.value;
    this.heroes = this.heroService.getLimitedHeros(this.limit);
    console.log(this.heroes.length);
  }

  search(event) {
    this.heroes = this.heroService.getLimitedHeros(this.limit).filter(d => d.email.indexOf(event.target.value) > -1);
  }

}
