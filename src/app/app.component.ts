import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MessageComponent } from './message/message.component';
import { RouterModule } from '@angular/router';
import { MemberService } from './member.service';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { member } from './member/member';
import { debounceTime,distinctUntilChanged,switchMap } from 'rxjs/operators';
import { AsyncPipe, NgFor } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MemberComponent,MessageComponent, RouterModule,NgFor,AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularTeam';
  constructor(private memberservice:MemberService){}
  private searchTerms=new Subject<string>();
  member$!:Observable<member[]>;
  search(term:string){
    this.searchTerms.next(term);
  }
  ngOnInit(){
    this.member$=this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term:string)=>this.memberservice.search(term))
    )
    console.log(this.member$);
  }
}
