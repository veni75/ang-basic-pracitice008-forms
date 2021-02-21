import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Event } from '../model/event';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

serverUrl: string = 'http://localhost:3000/events';

  /* private list: Event[] = [
    {
      id: 1,
      name: 'Angular Connect',
      date: '9/26/2036',
      time: '10am',
      location: { address: '1 London Rd', city: 'London', country: 'England' }
    },
    {
      id: 2,
      name: 'ng-nl',
      date: '4/15/2037',
      time: '9am',
      location: { address: '127 DT ', city: 'Amsterdam', country: 'NL' }
    },
    {
      id: 3,
      name: 'ng-conf 2037',
      date: '4/15/2037',
      time: '9am',
      location: { address: 'The Palatial America Hotel', city: 'Salt Lake City', country: 'USA' }
    },
    {
      id: 4,
      name: 'UN Angular Summit',
      date: '6/10/2037',
      time: '8am',
      location: { address: 'The UN Angular Center', city: 'New York', country: 'USA' }
    },
  ]; */

  list$: Observable<Event[]> = this.getAll();

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Event[]> {
    //this.list$.next(this.list);
    return this.http.get<Event[]>(this.serverUrl);
  }

  get(id:number):Observable<Event>{    
    id = typeof id === 'string' ? parseInt(id, 10) : id;
    if(id>0){
    return this.http.get<Event>(`${this.serverUrl}/${id}`);
    }    
    return of(new Event());
  }

  create(event:Event):Observable<Event>{      
    return this.http.post<Event>(this.serverUrl,event);
  } 

  remove(event:Event):Observable<Event>{    
    return this.http.delete<Event>(`${this.serverUrl}/${event.id}`);
  }

  update(event:Event):Observable<Event>{     
    return this.http.patch<Event>(`${this.serverUrl}/${event.id}`,event);
  }

  /* get(id: number): Observable<Event> {
    id = typeof id === 'string' ? parseInt(id, 10) : id;
    const ev: Event | undefined = this.list.find( item => item.id === id );
    if (ev) {
      return of(ev);
    }
    return of(new Event());
  }

  update(event: Event): Observable<Event> {
    const index: number = this.list.findIndex( item => item.id === event.id );
    this.list.splice(index, 1, event);
    this.getAll();
    return of(this.list[index]);
  }

  create(event: Event): Observable<Event> {    
    this.list.push(event);
    this.getAll();
    return of(this.list[this.list.length-1]);
  }

  remove(event:Event): void {
    const index: number = this.list.findIndex( item => item.id === event.id );
    this.list.splice(index, 1);
    this.getAll();    
  } */

}

/* Create metódus az EventService -ben.
> Hozd létre a create metódust, ami hozzáadja a kapott eseményt a list tömbhöz, 
majd a list$ -on keresztül értesíti a feliratkozókat, hogy módosltak az adatok 
(az update metódushoz hasonlóan). */

/* Remove metódus az EventService -ben.
> Hozd létre a remove metódust, ami eltávolít egy elemet a kapott id alapján 
a list tömbből, majd a list$ -on keresztül értesíti a feliratkozókat, hogy 
módosultak az adatok (az update metódushoz hasonlóan). */