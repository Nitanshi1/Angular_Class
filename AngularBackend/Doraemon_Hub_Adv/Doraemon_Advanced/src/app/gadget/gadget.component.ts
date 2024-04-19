import { Component } from '@angular/core';
import { gadget } from '../mydoraemon';
import { DataService } from '../data.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gadget',
  standalone: true,
  imports: [NgFor,NgIf,RouterModule],
  templateUrl: './gadget.component.html',
  styleUrl: './gadget.component.css'
})
export class GadgetComponent {
  constructor(private dataservice:DataService){}
  data?:gadget[];
  getGadget(){
    this.dataservice.getgadget().subscribe(info=>this.data=info);
  }
  ngOnInit(){
    this.getGadget();
  }
  delete(info:gadget){
    this.data=this.data?.filter(gadget=>gadget!=info);
    this.dataservice.deletegadget(info.gad_id).subscribe();
  }
}