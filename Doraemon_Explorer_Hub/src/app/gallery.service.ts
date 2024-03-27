import { Injectable } from '@angular/core';
import { gallerys } from './gallery/gallerys';
import { Mygallery } from './mygallerys';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private messageService:MessageService) { }
  getGallery():Observable<gallerys[]>{
    this.messageService.toadd('Gallerys are displsayed..');
    return of(Mygallery);
  }
}
