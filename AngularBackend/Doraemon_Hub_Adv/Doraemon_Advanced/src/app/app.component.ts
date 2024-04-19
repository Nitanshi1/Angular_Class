import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SearchDetailComponent } from './searchdetail/searchdetail.component';
import { MessagedetailComponent } from './messagedetail/messagedetail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SearchDetailComponent,MessagedetailComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Doraemon_Advanced';
}
