import { Component, OnInit } from '@angular/core';
import { InProgressRequestService } from 'src/app/core/services/in-progress.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {

  show$: Observable<boolean>;
  constructor(private counter: InProgressRequestService) { }

  ngOnInit(): void {
    this.show$ = this.counter.showProgress$;
  }

}
