import { Component } from '@angular/core';
import { member } from './member';
import { FormsModule } from '@angular/forms';
import { MEMBERS } from '../mymembers';
import { NgFor, NgIf} from '@angular/common';
import { MemberDetailsComponent } from '../member-details/member-details.component';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf,MemberDetailsComponent],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent {
   members = MEMBERS
   
   selectedMember?: member;
   onSelect(member: member): void{
    this.selectedMember = member;
   }
}
