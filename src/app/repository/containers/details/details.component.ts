import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BaseComponent } from 'src/app/core/components';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent extends BaseComponent implements OnInit {

  username: string;
  repo: string;

  constructor(
    private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.listeners();
  }

  listeners(): void {

    this.route.paramMap
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params: ParamMap) => {
        this.username = params.get('username');
        this.repo = params.get('repo');
      });

  }

}
