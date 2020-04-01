import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepositoriesComponent implements OnInit {

  @Input() username: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
