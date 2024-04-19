import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-messagedetail',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './messagedetail.component.html',
  styleUrl: './messagedetail.component.css'
})
export class MessagedetailComponent {
  constructor(public messageservice:MessageService){}
}
