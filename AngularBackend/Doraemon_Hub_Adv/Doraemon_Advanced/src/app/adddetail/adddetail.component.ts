import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { NgIf } from '@angular/common';
import { Location } from '@angular/common';
import { character } from '../mydoraemon';
import { gadget } from '../mydoraemon';

@Component({
  selector: 'app-adddetail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './adddetail.component.html',
  styleUrl: './adddetail.component.css'
})
export class AdddetailComponent {
  constructor(private dataservice:DataService,private location:Location){}
  add(opt:string,name:string, main:string){

      name=name.trim();
      main=main.trim();
    
      
      if(!name||!opt||!main){
        return;
      }
    if(opt=="characters"){
      const talent=main;
      this.dataservice.addchar({name, talent} as character).subscribe(()=>this.goback());
    }
    if(opt=="gadgets"){
      const work=main;
      this.dataservice.addgad({name, work} as gadget).subscribe(()=>this.goback());
    }
    
  }
  goback(){
    this.location.back();
  }

}
