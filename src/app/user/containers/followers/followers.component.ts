import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { ListBaseComponent } from 'src/app/core/components';
import { User, Paging } from 'src/app/shared';
import { UserFacade } from '../../+state';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FollowersComponent extends ListBaseComponent<User> implements OnInit, OnChanges {

  @Input() username: string;

  constructor(private facade: UserFacade) { super(); }

  ngOnInit(): void {
    this.initialize();
  }

  ngOnChanges(): void {
    this.load();
  }

  initialize() {
    this.entities$ = this.facade.followers.entities$;
    this.paging$ = this.facade.followers.paging$;
    this.total$ = this.facade.followers.total$;
  }

  load(): void {
    this.facade.loadFollowers(this.username);
  }

  setPage(paging: Paging): void {
    this.facade.setFollowersPage(paging);
  }
}
