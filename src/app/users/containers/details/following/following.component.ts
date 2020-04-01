import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {

  @Input() username: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
