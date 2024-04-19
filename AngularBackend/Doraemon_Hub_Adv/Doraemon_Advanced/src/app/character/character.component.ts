import { Component } from '@angular/core';
import { character } from '../mydoraemon';
import { DataService } from '../data.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [NgFor,NgIf,RouterModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
  constructor(private dataservice:DataService){}
  data?:character[];
  getCharacter(){
    return this.dataservice.getcharacter().subscribe(info=>this.data=info);
  }
  ngOnInit(){
     this.getCharacter();
  }
  delete(info:character){
    this.data=this.data?.filter(character=>character!=info);
    this.dataservice.deletecharacter(info.char_id).subscribe();
  }
}
