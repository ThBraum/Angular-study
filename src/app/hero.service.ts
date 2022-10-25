//ng generete service hero
//Services são maneira de compartilhar informações entre classes que não se conhecem .
import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root' //provedor => pode criar ou entregar um service
})
export class HeroService {
  getHeroes(): Observable<Hero[]> { //Metodo para retornar herois simulados
    const heroes = of(HEROES) //of(HEROES)retorna um Observable<Hero[]>que emite um único valor, o array de heróis simulados.
    this.messageService.add('HeroService: fetched heroes')
    return heroes;
  }

  constructor(private messageService: MessageService) { }
}
