import { Component, Input } from '@angular/core';
import { member } from '../member/member';
import { NgFor, NgIf,UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-member-details',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, UpperCasePipe],
  templateUrl: './member-details.component.html',
  styleUrl: './member-details.component.css'
})
export class MemberDetailsComponent {
  @Input() member?: member;
}
