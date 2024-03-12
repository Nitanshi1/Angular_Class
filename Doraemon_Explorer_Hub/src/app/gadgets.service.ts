import { Injectable } from '@angular/core';
import { gadgets } from './gadgets/gadgets';
import { Mygadgets } from './mygadgets';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GadgetsService {

  constructor() { }
 
  getGadgets():Observable<gadgets[]>{
    return of(Mygadgets);
  }
  getgadgetsdetail(id: number): Observable<gadgets>{
    const gadg=Mygadgets.find(g=>g.id===id)!;
    return of(gadg);
  }
}


