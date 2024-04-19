import { Component } from '@angular/core';
import { gadget } from '../mydoraemon';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-gadget-details',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './gadget-details.component.html',
  styleUrl: './gadget-details.component.css'
})
export class GadgetDetailsComponent {
  constructor(private dataservice:DataService,private activatedroute:ActivatedRoute,private location:Location){}
  selectedgadget?:gadget;
 
 getGadgetdetail(){
   const myid=Number(this.activatedroute.snapshot.paramMap.get('id'));
   this.dataservice.getgadgetdetail(myid).subscribe(g=>this.selectedgadget=g);
 }
 ngOnInit(){
   this.getGadgetdetail();
 }
 save(){
   if(this.selectedgadget){
     this.dataservice.updategadget(this.selectedgadget).subscribe(()=>this.goback());
   }
 }
 goback(){
   this.location.back();
 }
}
