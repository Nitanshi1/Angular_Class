import { Component, Input } from '@angular/core';
import { member } from '../member/member';
import { NgFor, NgIf,UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MemberService } from '../number.service';


@Component({
  selector: 'app-member-details',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, UpperCasePipe],
  templateUrl: './member-details.component.html',
  styleUrl: './member-details.component.css'
})
export class MemberDetailsComponent {
 member?: member;

 constructor(private memberService:MemberService ,
   private location: Location 
  , private route:ActivatedRoute){}

  ngOnInit():void{
    this.getMem();
  }
//call the getMem function call in the number.service.ts()
 getMem():void{
  const id=Number(this.route.snapshot.paramMap.get('id'));
  this.memberService.getMem(id).subscribe(mem=>this.member=mem);
 }
 //reflects on the back button
 goBack(){
  this.location.back();
 }
 save(): void {
  if(this.member){
    this.memberService.updateMember(this.member).subscribe(()=> this.goBack());
  }
}
}
