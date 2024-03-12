import { Injectable } from '@angular/core';
import { gallerys } from './gallery/gallerys';
import { Mygallery } from './mygallerys';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor() { }
  getGallery():Observable<gallerys[]>{
    return of(Mygallery);
  }
}
