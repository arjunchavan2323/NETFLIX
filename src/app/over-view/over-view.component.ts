import { Component, Input, OnInit } from '@angular/core';
import { imovie } from '../shared/model';

@Component({
  selector: 'app-over-view',
  templateUrl: './over-view.component.html',
  styleUrls: ['./over-view.component.scss']
})
export class OverViewComponent implements OnInit {
@Input ()movie!:imovie
  constructor() { }

  ngOnInit(): void {
  }

}
