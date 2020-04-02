import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UsersFacade } from '../../+state';
import { FormControl } from '@angular/forms';
import { Paging } from 'src/app/shared/models/paging.model';
import { takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { ListBaseComponent } from 'src/app/core/components';
import { User } from 'src/app/shared';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent extends ListBaseComponent<User> implements OnInit {

  searchInput: FormControl = new FormControl('');

  constructor(private facade: UsersFacade) { super(); }

  ngOnInit(): void {
    this.domListeners();
    this.initialize();
  }

  initialize(): void {
    this.entities$ = this.facade.entities$;
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

}
