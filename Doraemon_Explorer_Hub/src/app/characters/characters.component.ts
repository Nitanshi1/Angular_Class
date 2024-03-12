import { Component } from '@angular/core';
import { fictonalcharacter } from './characters';
import { CharactersService } from '../characters.service';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {
    mycharacter?: fictonalcharacter[];
    constructor(private characterService: CharactersService){}
    ngOnInit(){
      this.getCharacter();
    }
    getCharacter(){
       this.characterService.getcharacter().subscribe(charact=>this.mycharacter=charact);
    }

}
