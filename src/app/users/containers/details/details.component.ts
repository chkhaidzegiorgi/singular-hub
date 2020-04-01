import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { UsersFacade } from '../../+store';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit {

  username: string;
  user$: Observable<User>;

  constructor(
    private route: ActivatedRoute,
    private facade: UsersFacade) { }

  ngOnInit(): void {
    this.username = this.getUsername();
    this.user$ = this.facade.selectedUser$;
    this.facade.loadUser(this.username);
  }

  private getUsername(): string {
    return this.route.snapshot.paramMap.get('username');
  }
}
