import { Component } from '@angular/core';
import { member } from './member';
import { FormsModule } from '@angular/forms';
import { MEMBERS } from '../mymembers';
import { NgFor , NgIf } from '@angular/common';
import { MemberDetailsComponent } from '../member-details/member-details.component';
import { MemberService } from '../member.service';
import { MessageService } from '../message.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [FormsModule , NgFor , NgIf , MemberDetailsComponent,RouterModule],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent {
  members: member[] = [];

  constructor(private memberService: MemberService,private messageService:MessageService){}

  ngOnInit(): void{
    this.getMembers();
  }
//commonly used to call service after the constructor is called and intialized
  getMembers(): void{
   this.memberService.getMembers().subscribe(mem =>this.members=mem);
  
  }
//Subscribe reflects that notification is sent
  // selectedMember?: member;
  // onSelect(member: member): void {
  //   this.selectedMember = member;
  //   this.messageService.add(`Message shown is........${member.name}`)


  add(name: string):void{
    name=name.trim();
    if(!name){
      return
    }
    this.memberService.addMember({name} as member).subscribe(member=>this.members.push(member));
  }

  delete(member:member):void{
    this.members=this.members.filter(m=>m!= member);
    this.memberService.deleteMember(member.id).subscribe();
  }
}
