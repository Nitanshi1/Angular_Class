import { Injectable } from '@angular/core';
import { gadgets } from './gadgets/gadgets';
import { Mygadgets } from './mygadgets';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class GadgetsService {

  constructor(private messageService: MessageService) { }
 
  getGadgets():Observable<gadgets[]>{
    this.messageService.add('gadgets are shown');
    return of(Mygadgets);
  }
  getgadgetsdetail(id: number): Observable<gadgets>{
    const gadg=Mygadgets.find(g=>g.id===id)!;
    this.messageService.add(`gadget displayed is ${id}`);
    return of(gadg);
  }
}


