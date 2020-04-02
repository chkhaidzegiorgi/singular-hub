import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { ListBaseComponent } from 'src/app/core/components';
import { User, Paging } from 'src/app/shared';
import { UserFacade } from '../../+state';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FollowingComponent extends ListBaseComponent<User> implements OnInit, OnChanges  {

  @Input() username: string;

  constructor(private facade: UserFacade) { super(); }

  ngOnInit(): void {
    this.initialize();
  }

  ngOnChanges(): void {
    this.load();
  }

  initialize() {
    this.entities$ = this.facade.following.entities$;
    this.paging$ = this.facade.following.paging$;
    this.total$ = this.facade.following.total$;
  }

  load(): void {
    this.facade.loadFollowings(this.username);
  }

  setPage(paging: Paging): void {
    this.facade.setFollowingsPage(paging);
  }

}
