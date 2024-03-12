import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { fictonalcharacter } from './characters/characters';
import { MyCharacter } from './mycharacters';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private messageService:MessageService) { }
  getcharacter():Observable<fictonalcharacter[]>{
    this.messageService.add('characters are shown');
    return of(MyCharacter);
  }
  getcharactersdetail(id: number): Observable<fictonalcharacter>{
    const chara=MyCharacter.find(c=>c.id===id)!;
    this.messageService.add(`character displayed is ${id}`);
    return of(chara);
  }
}
