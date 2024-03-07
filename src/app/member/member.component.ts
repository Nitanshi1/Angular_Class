import { Component } from '@angular/core';
import { member } from './member';
import { FormsModule } from '@angular/forms';
import { MEMBERS } from '../mymembers';
import { NgFor , NgIf } from '@angular/common';
import { MemberDetailsComponent } from '../member-details/member-details.component';
import { MemberService } from '../number.service';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [FormsModule , NgFor , NgIf , MemberDetailsComponent],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent {
  members: member[] = [];

  constructor(private memberService: MemberService){}

  ngOnInit(): void{
    this.getMembers();
  }
//commonly used to call service after the constructor is called and intialized
  getMembers(): void{
   this.memberService.getMembers().subscribe(members =>this.members=members);
  }
//Subscribe reflects that notification is sent
  selectedMember?: member;
  onSelect(member: member): void {
    this.selectedMember = member;
  }
}