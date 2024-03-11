import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { member } from '../member/member';
import { MemberService } from '../number.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor],
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

