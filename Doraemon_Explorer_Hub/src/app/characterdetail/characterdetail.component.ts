import { Component } from '@angular/core';
import { CharactersService } from '../characters.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { fictonalcharacter } from '../characters/characters';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-characterdetail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './characterdetail.component.html',
  styleUrl: './characterdetail.component.css'
})
export class CharacterdetailComponent {
  character?:fictonalcharacter;
  constructor(private route: ActivatedRoute, 
             private location: Location,
             private characterdetailservice:CharactersService){}
            
    ngOnInit(){
      this.getcharactersdetail();
    }
    getcharactersdetail(){
      const id=Number(this.route.snapshot.paramMap.get('id'));
      this.characterdetailservice.getcharactersdetail(id).subscribe(chara=>this.character=chara);
     
    }
    goBack():void{
      this.location.back();
    }

}
