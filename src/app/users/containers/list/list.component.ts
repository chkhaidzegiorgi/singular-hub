import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { UsersFacade, ListConfig, UserList } from '../../+store';
import { Observable, Subject } from 'rxjs';
import { User } from '../../models/user.model';
import { PageEvent } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { Paging } from 'src/app/shared/models/paging.model';
import { takeUntil, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit, OnDestroy {

  searchInput: FormControl = new FormControl('');

  unsubscribe$: Subject<void> = new Subject();

  users$: Observable<User[]>;
  total$: Observable<number>;
  paging$: Observable<Paging>;

  constructor(private facade: UsersFacade) { }

  ngOnInit(): void {
    this.domListeners();
    this.initialize();
  }

  initialize(): void {
    this.users$ = this.facade.users$;
    this.paging$ = this.facade.paging$;
    this.total$ = this.facade.total$;
  }

  setPage(paging: Paging): void {
    this.facade.setPage(paging);
  }

  setQuery(query: string): void {
    this.facade.setQuery(query);
  }

  domListeners(): void {
    this.searchInput.valueChanges
      .pipe(
        takeUntil(this.unsubscribe$),
        distinctUntilChanged()
      )
      .subscribe((value: string) => {
        this.setQuery(value);
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
