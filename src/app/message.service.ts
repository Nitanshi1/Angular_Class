import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messages: string[]=[];

  //for adding in string
  add(message: string){
    this.messages.push(message)
  }
//clearning the entire string
  clear(){
    this.messages=[];
  }
}
