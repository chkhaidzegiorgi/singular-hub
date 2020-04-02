import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserFacade } from '../../+state';
import { User } from 'src/app/shared';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/core/components';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent extends BaseComponent implements OnInit {

  username: string;
  user$: Observable<User>;

  constructor(
    private route: ActivatedRoute,
    private facade: UserFacade) {
    super();
  }

  ngOnInit(): void {
    this.user$ = this.facade.user$;
    this.listeners();
  }

  listeners() {
    this.route.paramMap
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params: ParamMap) => {
        this.username = params.get('username');
        this.facade.loadUser(this.username);
      });
  }
}
