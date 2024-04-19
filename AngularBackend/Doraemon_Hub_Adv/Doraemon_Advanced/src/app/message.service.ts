import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  mymessages:string[]=[];
  add(message:string){
    this.mymessages.push(message);
  }
  clear(){
    this.mymessages=[];
}
}
