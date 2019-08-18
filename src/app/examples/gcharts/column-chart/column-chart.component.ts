import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GamerApiService } from 'src/app/shared/gamer-api.service';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})
export class ColumnChartComponent implements OnInit {

  constructor(private gamerService: GamerApiService) { }

  title = 'Games and Gamers Report';
  titleLevel = 'Difficulties of Games Report';
  type = 'ColumnChart';
  typeLevel = 'PieChart';
  typeLine = 'LineChart';
  games: object = {};
  levels: object = {};
  dataGames = [];
  dataDificulty = [];
  dataLine = [
    ['Jan',  7.0, -0.2, -0.9, 3.9],
    ['Feb',  6.9, 0.8, 0.6, 4.2],
    ['Mar',  9.5,  5.7, 3.5, 5.7],
    ['Apr',  14.5, 11.3, 8.4, 8.5],
    ['May',  18.2, 17.0, 13.5, 11.9],
    ['Jun',  21.5, 22.0, 17.0, 15.2],
    ['Jul',  25.2, 24.8, 18.6, 17.0],
    ['Aug',  26.5, 24.1, 17.9, 16.6],
    ['Sep',  23.3, 20.1, 14.3, 14.2],
    ['Oct',  18.3, 14.1, 9.0, 10.3],
    ['Nov',  13.9,  8.6, 3.9, 6.6],
    ['Dec',  9.6,  2.5,  1.0, 4.8]
 ];
  columnNames = ['Game', '# of Gamers'];
  columnLevel = ['Level', '# of Level'];
  columnLine  = ['Month', 'Tokyo', 'New York', 'Berlin', 'Paris'];
  options = {};
  optionsLevel = {
    is3D: true
  };
  widthLarge = 1100;
  width = 500;
  height = 400;

  ngOnInit() {
    this.getGamerData();
  }

  ngAfterViewInit() { }

  getGamerData() {
    this.gamerService.getAllGamers().subscribe( res => {
       console.info('res', res);
       this.games = {};
       this.levels = {};
       res.filter( (val) => {
          if (!this.games[val.game]) {
            this.games[val.game] = [];
            this.games[val.game].push(val);
          } else {
            this.games[val.game].push(val);
          }
          if (!this.levels[val.difficulty]) {
            this.levels[val.difficulty] = [];
            this.levels[val.difficulty].push(val);
          } else {
            this.levels[val.difficulty].push(val);
          }
       });
       Object.keys(this.games).forEach((game) => {
        this.dataGames.push([game, this.games[game].length]);
       });
       Object.keys(this.levels).forEach((level) => {
        this.dataDificulty.push([level, this.levels[level].length]);
       });
    });
  }
}
