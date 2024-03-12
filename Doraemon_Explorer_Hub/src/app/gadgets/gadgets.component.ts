import { Component } from '@angular/core';
import { gadgets } from './gadgets';
import { GadgetsService } from '../gadgets.service';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gadgets',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './gadgets.component.html',
  styleUrl: './gadgets.component.css'
})
export class GadgetsComponent {
  mygadgets?: gadgets[];
  constructor(private gadgetService: GadgetsService){}
  ngOnInit(){
    this.getGadgets();
  }
  getGadgets(){
     this.gadgetService.getGadgets().subscribe(gad=>this.mygadgets=gad);
  }

}
