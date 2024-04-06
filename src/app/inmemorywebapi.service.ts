import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { member } from './member/member';
@Injectable({
  providedIn: 'root'
})
export class InmemorywebapiService implements InMemoryDbService{
  createDb(){
    const members = [
      { id:1 , name: 'Nitanshi'},
      { id:2 , name: 'Disha'},
      { id:3 , name: 'Ankit'},
      { id:4 , name: 'Vansh'}
    ];
    return {members};
  }
  
  genId(members: member[]): number{
    return members.length > 0 ? Math.max(...members.map(member => member.id))+ 1: 1;
}//... javascript spread operator for entire array & map function used to jhatna :or condition
}