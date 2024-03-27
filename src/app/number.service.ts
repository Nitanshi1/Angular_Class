import { Injectable } from '@angular/core';
import { member } from './member/member'; 
import { MEMBERS } from './mymembers';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private memberurl='api/members'
  
  httpOptions={headers:new HttpHeaders({'Content-type':'application-json'})}
   
  constructor(private messageService:MessageService, private http:HttpClient) { }

  //to make the list type as an observable array after making the observable array we use subscribe
  getMembers(): Observable<member[]> {
    this.messageService.add('MemberService: fetched Members....');
    return this.http.get<member[]>(this.memberurl)
  }



  getMem(id:number):Observable<member>{
  const url=`${this.memberurl}/${id})`;
  this.messageService.add(`Member displayed: fetched Member id =${id}....`);
  return this.http.get<member>(url);
  }


  updateMember(member:member):Observable<any>
  {
    return this.http.put(this.memberurl,member, this.httpOptions);
  }

  addMember(member: member): Observable<member>
  {
    return this.http.post<member>(this.memberurl,member,this.httpOptions);
  }

  deleteMember(id:number): Observable<member>{
    const url = `${this.memberurl}/${id}`;
    return this.http.delete<member>(url,this.httpOptions);
  }

}