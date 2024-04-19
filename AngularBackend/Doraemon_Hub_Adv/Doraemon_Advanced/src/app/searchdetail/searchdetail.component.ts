import { Component } from '@angular/core';
import { character } from '../mydoraemon';
import { Observable,Subject,debounceTime,distinctUntilChanged,switchMap } from 'rxjs';
import { DataService } from '../data.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-search-detail',
  standalone: true,
  imports: [NgIf,AsyncPipe,NgFor,RouterModule],
  templateUrl: './searchdetail.component.html',
  styleUrl: './searchdetail.component.css'
})
export class SearchDetailComponent {
  constructor(private dataservice:DataService,private location:Location){}
  private searchTerms=new Subject<string>();
  selected$!:Observable<any>;
  option:string="";
  search(term:string,opt:string){
    if(!term.trim()){
      return;
    }
    this.searchTerms.next(term);
    this.option=opt;
    console.log(this.option);
  }
  ngOnInit(){
   
      this.selected$=this.searchTerms.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term:string)=>this.dataservice.searchdata(term,this.option))
      )
      console.log(this.selected$);
  }
  goback(){
    this.location.back();
  }
}