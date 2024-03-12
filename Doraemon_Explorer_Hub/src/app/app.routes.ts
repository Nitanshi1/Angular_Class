import { Routes } from '@angular/router';
import { GadgetsComponent } from './gadgets/gadgets.component';
import { CharactersComponent } from './characters/characters.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CharacterdetailComponent } from './characterdetail/characterdetail.component';
import { GadgetdetailComponent } from './gadgetdetail/gadgetdetail.component';

export const routes: Routes = [
    {path: "gadgets", component:GadgetsComponent},
    {path: "characters", component:CharactersComponent},
    {path: "gallery", component:GalleryComponent},
    {path: "", redirectTo:"/gallery", pathMatch:'full'},
    {path: "character/:id", component:CharacterdetailComponent},
    {path: "gadget/:id", component: GadgetdetailComponent},
 

];
