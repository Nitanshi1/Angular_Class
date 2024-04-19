import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { character,gadget } from './mydoraemon';
import { Observable , of } from 'rxjs';
import { catchError,map,tap } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient,private messageservice:MessageService) { }
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}
  private url1='http://localhost:4000/characters'
  private url2='http://localhost:4000/gadgets'


  getcharacter():Observable<character[]>{
    return this.http.get<character[]>(this.url1).pipe(
      tap(_=>this.log('fetched characters..')),
     catchError(this.handleError<character[]>('getcharacter',[]))
    );
  }
  getgadget():Observable<gadget[]>{
    return this.http.get<gadget[]>(this.url2).pipe(
      tap(_=>this.log('fetched gadgets..')),
     catchError(this.handleError<gadget[]>('getgadget',[]))
    );
  }

  getcharacterdetail(id:number):Observable<character>{
    return this.http.get<character>(`${this.url1}/${id}`).pipe(
      tap(_=>this.log(`fetched character detail whose id=${id}...`)),
      catchError(this.handleError<character>(`getcharacterdetail id=${id}`))
    );
  }
  getgadgetdetail(id:number):Observable<gadget>{
    return this.http.get<gadget>(`${this.url2}/${id}`).pipe(
      tap(_=>this.log(`fetched gadget detail whose id=${id}...`)),
      catchError(this.handleError<gadget>(`getgadgetdetail id=${id}`))
    );;
  }
  searchdata(term:string,compo:string):Observable<any>{
      let newurl="";
    
      if(compo=="characters"){
        newurl=this.url1;
      }
      else{
        newurl=this.url2;
        
      }
      // console.log("ur"+newurl+term);
      return this.http.get(`${newurl}/search?term=${term}`).pipe(
        tap(_=>this.log(`searching data for ${term}`)),
        catchError(this.handleError<any>('searchdata',[]))
      )
    
  }
  addchar(character:character):Observable<character>{
  
      return this.http.post<character>(this.url1,character,this.httpOptions).pipe(
        tap((newcharacter:character)=>this.log(`New character added with id=${newcharacter.char_id}`)),
        catchError(this.handleError<character>('addchar'))
      );
    
  }
  addgad(gadget:gadget):Observable<gadget>{
      return this.http.post<gadget>(this.url2,gadget,this.httpOptions).pipe(
        tap((newgadget:gadget)=>this.log(`New gadget added with id=${newgadget.gad_id}`)),
        catchError(this.handleError<gadget>('addgad'))
      );;
  }
  deletecharacter(id:number):Observable<character>{
      return this.http.delete<character>(`${this.url1}/${id}`, this.httpOptions).pipe(
        tap(_=>this.log(`deleted character whose id=${id}`)),
        catchError(this.handleError<character>('deletecharacter'))
      )
  }
  deletegadget(id:number):Observable<gadget>{
    return this.http.delete<gadget>(`${this.url2}/${id}`, this.httpOptions).pipe(
      tap(_=>this.log(`deleted gadget whose id=${id}`)),
      catchError(this.handleError<gadget>('deletegadget'))
    )
  }
  updatecharacter(character:character):Observable<any>{
    return this.http.put(`${this.url1}/${character.char_id}`,character,this.httpOptions).pipe(
      tap(_=>this.log(`updated character whose id=${character.char_id}`)),
      catchError(this.handleError<any>('updatecharacter'))
    );
  }
  updategadget(gadget:gadget):Observable<any>{
    return this.http.put(`${this.url2}/${gadget.gad_id}`,gadget,this.httpOptions).pipe(
      tap(_=>this.log(`updated gadget whose id=${gadget.gad_id}`)),
      catchError(this.handleError<any>('updategadget'))
    );;
  }
  private handleError<T>(operation='operation', result?:T){
     return (error:any):Observable<T>=>{
      this.log(`${operation} failed: ${error.message}`)
      console.log(error);
       return of(result as T)
     }
  }
  private log(message:string){
    this.messageservice.add(`${message}`);
  }
}