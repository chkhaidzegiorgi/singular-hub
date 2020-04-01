import { Component, OnInit } from '@angular/core';
import { UsersFacade } from '../../+store';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private facade: UsersFacade) { }

  ngOnInit(): void {
    this.initialize();
    this.load();
  }
  
  initialize(): void {
    this.users$ = this.facade.users$;
  }

  load(): void {
    this.facade.load();
  }


}
