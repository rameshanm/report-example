import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GamerApiService } from '../shared/gamer-api.service';
import { Gamer } from '../shared/gamer-model';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';

  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

public ELEMENT_DATA: Gamer[];
  // dataSource = new MatTableDataSource<Gamer[]>();
  dataSource;
  gamers: MatTableDataSource<Gamer[]>;
  array: Gamer;
  displayedColumns: string[] = ['id', 'username', 'game', 'difficulty', 'startTime', 'endTime', 'score'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private _gamerService: GamerApiService) { }

  ngOnInit() {
    // console.log("Load Data into Table");
    this.getGamerData();
  }

  getGamerData() {
    this._gamerService.getAllGamers().subscribe( res => {
        this.ELEMENT_DATA = res;
        this.dataSource = new MatTableDataSource<Gamer>(this.ELEMENT_DATA);
        console.info('this.dataSource', this.dataSource, this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}