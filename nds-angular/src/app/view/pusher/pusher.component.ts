import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/interface/page';

@Component({
  selector: 'nds-pusher',
  templateUrl: './pusher.component.html',
  styleUrls: ['./pusher.component.css']
})
export class PusherComponent implements OnInit {

  @Input('content') contentContainer: Page;

  constructor() { }

  ngOnInit(): void {
  }

  teste(): void {
    console.log(this.contentContainer);
  }
}
