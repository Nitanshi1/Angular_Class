import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { GadgetsService } from '../gadgets.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { gadgets } from '../gadgets/gadgets';

@Component({
  selector: 'app-gadgetdetail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './gadgetdetail.component.html',
  styleUrl: './gadgetdetail.component.css'
})
export class GadgetdetailComponent {
  gadget?:gadgets;
  constructor(private route: ActivatedRoute, 
             private location: Location,
             private gadgetdetailservice: GadgetsService){}
            
    ngOnInit(){
      this.getgadgetsdetail();
    }
    getgadgetsdetail(){
      const id=Number(this.route.snapshot.paramMap.get('id'));
      this.gadgetdetailservice.getgadgetsdetail(id).subscribe(gadg=>this.gadget=gadg);
    
    }
    goBack():void{
      this.location.back();
    }

}
