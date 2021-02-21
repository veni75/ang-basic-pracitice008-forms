import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Event } from 'src/app/model/event';
import { EventService } from 'src/app/service/event.service';
//import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  //eventList: BehaviorSubject<Event[]> = this.eventService.list$;
  
  eventList$: Observable<Event[]> = this.eventService.getAll();
  testEvent: Observable<Event> = this.eventService.get(1);

  constructor(
    private eventService: EventService,
    //private router: Router,
  ) { }

  ngOnInit(): void {}

onDelete(event:Event):void{
  
  this.eventService.remove(event).subscribe(    
    () => location.reload()
  ); 
}


}
