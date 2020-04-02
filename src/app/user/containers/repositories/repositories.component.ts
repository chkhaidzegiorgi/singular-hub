import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';
import {  Paging } from 'src/app/shared';
import { ListBaseComponent } from 'src/app/core/components';
import { UserFacade } from '../../+state';
import { PageEvent } from '@angular/material/paginator';
import { Repository } from '../../models/repositories.model';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepositoriesComponent extends ListBaseComponent<Repository> implements OnInit, OnChanges {

  @Input() username: string;

  displayedColumns: string[] = ['name', 'lastPush'];

  constructor(private facade: UserFacade) { super(); }

  ngOnInit(): void {
    this.initialize();
  }

  ngOnChanges(): void {
    this.load();
  }

  initialize() {
    this.entities$ = this.facade.repositories.entities$;
    this.paging$ = this.facade.repositories.paging$;
    this.total$ = this.facade.repositories.total$;
  }

  load(): void {
    this.facade.loadRepositories(this.username);
  }

  setPage(page?: PageEvent): void {
    const paging: Paging = {
      page: page.pageIndex + 1,
      limit: page.pageSize
    };
    this.facade.setRepositoriesPage(paging);
  }
}
