import { Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { GadgetComponent } from './gadget/gadget.component';

import {CharacterDetailsComponent} from './character-details/character-details.component';
import { GadgetDetailsComponent } from './gadget-details/gadget-details.component';
import { SearchDetailComponent } from './searchdetail/searchdetail.component';
import { AdddetailComponent } from './adddetail/adddetail.component';
export const routes: Routes = [
    {path:"" , redirectTo:"/gallery" ,pathMatch:'full'},
     {path:"Character" ,component:CharacterComponent},
    {path:"character/:id" ,component:CharacterDetailsComponent},
    {path:"gadget" , component:GadgetComponent},
    {path:"gadget/:id" , component:GadgetDetailsComponent},
    // {path:"gallery" , component:GalleryComponent},
    {path:"search" , component:SearchDetailComponent},
    {path:"add" , component:AdddetailComponent}
];
