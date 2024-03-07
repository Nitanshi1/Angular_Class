import { Injectable } from '@angular/core';
import { member } from './member/member'; 
import { MEMBERS } from './mymembers';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor() { }
//to make the list type as an observable array after making the observable array we use subscribe
  getMembers(): Observable<member[]> {
    return of(MEMBERS);
  }
}