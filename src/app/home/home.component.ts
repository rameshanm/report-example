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

  public ELEMENT_DATA: any[];
  dataSource: MatTableDataSource<any>;
  displayedColumns: any[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private _gamerService: GamerApiService) { }

  ngOnInit() {
    this.getGamerData();
  }

  getGamerData() {
    this._gamerService.getAllGamers().subscribe( res => {
      this.ELEMENT_DATA = res;
      this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
      console.log(this.dataSource);
      this.displayedColumns = this.getColumnNames(this.dataSource.filteredData);
      console.log(this.displayedColumns);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  getColumnNames(data: any) : any[] {
    var result = [];
    if(data === undefined) {
      console.log("Data undefined");
      return null;
    } else {
      for (let index = 0; index < data.length; index++) {
        for (let key in data[index]) {
          if (result.indexOf(key) === -1 ) {
            result.push(key);
          }
        }
      }
      console.log("Column Names : " + result);
      return result;
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
