import { Component, OnInit, ViewChild } from '@angular/core';
import { FlexmonsterPivot } from 'ng-flexmonster';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  @ViewChild('pivot', {static: false}) pivot: FlexmonsterPivot;
  public pivotReport = {
    dataSource: {
      fileName: 'http://localhost:8075/api/gamer'
    }
  }

}
