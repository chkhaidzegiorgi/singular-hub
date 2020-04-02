import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ListBaseComponent } from 'src/app/core/components';
import { User, Paging } from 'src/app/shared';
import { RepositoryFacade } from '../../+state';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss']
})
export class ContributorsComponent extends ListBaseComponent<User> implements OnInit, OnChanges {

  @Input() repo: string;
  @Input() username: string;

  constructor(private facade: RepositoryFacade) { super(); }

  ngOnInit(): void {
    this.initialize();
  }

  ngOnChanges(): void {
    this.load();
  }

  initialize() {
    this.entities$ = this.facade.contributions.entities$;
    this.paging$ = this.facade.contributions.paging$;
    this.total$ = this.facade.contributions.total$;
  }

  load(): void {
    this.facade.loadContributions(this.username, this.repo);
  }

  setPage(paging: Paging): void {
    this.facade.setContributionsPage(paging);
  }

}
