import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { member } from '../member/member';
import { MemberService } from '../member.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  members:member[]=[];
  constructor(private memberservice:MemberService){}

  ngOnInit(){
    this.getMembers();
  }
   getMembers(){
    this.memberservice.getMembers().subscribe(member=>this.members=member);
   }
}

