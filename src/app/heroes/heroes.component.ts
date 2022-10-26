/*Arquivo ts responsável pela LÓGICA DE NEGÓCIO do seu componente,
contém todos os COMPORTAMENTOS e ESTADOS - variáveis da aplicação */


import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';




/*classe HeroesComponent utiliza o decorator Component, passando
 um objeto de metadados*/
@Component({
  selector: 'app-heroes', /*indice selector => especifica qual sera a
                            tag HTML que usaremos para representar esse component*/
  templateUrl: './heroes.component.html',/*caminho do arquivo que vai conter o
                            conteúdo visual do component*/
  styleUrls: ['./heroes.component.scss'] /*caminho dos arquivos de estilização*/
})

export class HeroesComponent implements OnInit {
  //heroes = HEROES;
  heroes: Hero[] = [];

  //selectedHero? : Hero;//tipagem=> selectedHero pode não ter nada ou ser do tipo Hero
  /*método Constructor -> geralmente utilizado para injeção de dependência */
  constructor(private heroService: HeroService) { }

    /*método ngOnInit -> método de callback chamado quando todas as informações
  do componente estiverem carregadas */
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
