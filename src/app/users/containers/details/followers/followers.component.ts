import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  @Input() username: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
