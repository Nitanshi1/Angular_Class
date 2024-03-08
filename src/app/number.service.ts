import { Injectable } from '@angular/core';
import { member } from './member/member'; 
import { MEMBERS } from './mymembers';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private messageService:MessageService) { }
//to make the list type as an observable array after making the observable array we use subscribe
  getMembers(): Observable<member[]> {
    const members = of(MEMBERS);
    this.messageService.add('MemberService: fetched Members....');
    return members;
  }
}