import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  message?:string[]=[];

  toadd(messgs:string){
    this.message?.push(messgs);
  }
  clear(){
    this.message=[];
  }

}

