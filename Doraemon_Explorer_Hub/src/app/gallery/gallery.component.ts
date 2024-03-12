import { Component } from '@angular/core';
import { gallerys } from './gallerys';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterModule,NgFor],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  mygallery?: gallerys[];
  constructor(private galleryService: GalleryService){}
  ngOnInit(){
    this.getGallery();
  }
  getGallery(){
     this.galleryService.getGallery().subscribe(gall=>this.mygallery=gall);
  }

}
