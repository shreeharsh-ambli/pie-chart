import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  pieChartData: any[] = [
    ['Task', 'Hours'],
    ['Eat', 2],
    ['Sleep', 8],
    ['Code', 12],
    ['Commute', 3]
  ];
}
