import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { fictonalcharacter } from './characters/characters';
import { MyCharacter } from './mycharacters';



@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor() { }
  getcharacter():Observable<fictonalcharacter[]>{
    return of(MyCharacter);
  }
  getcharactersdetail(id: number): Observable<fictonalcharacter>{
    const chara=MyCharacter.find(c=>c.id===id)!;
    return of(chara);
  }
}
