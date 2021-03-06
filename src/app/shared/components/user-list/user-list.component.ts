import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Paging } from 'src/app/shared/models/paging.model';
import { PageEvent } from '@angular/material/paginator';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {


  @Input() users$: Observable<User[]>;
  @Input() total$: Observable<number>;
  @Input() paging$: Observable<Paging>;

  @Output() setPage: EventEmitter<Paging> = new EventEmitter();

  displayedColumns: string[] = ['username'];
  

  onSetPage(page?: PageEvent): void {
    const paging: Paging = {
      page: page.pageIndex + 1,
      limit: page.pageSize
    };

    this.setPage.emit(paging);
  }


}
