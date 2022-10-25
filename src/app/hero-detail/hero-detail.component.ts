import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero;
  /*A hero propriedade deve ser uma Input propriedade, anotada com o decorador,
  porque as ligações externas se vinculam a ela assim. @Input() HeroesComponent */

  constructor() { }

  ngOnInit(): void {
  }

}
