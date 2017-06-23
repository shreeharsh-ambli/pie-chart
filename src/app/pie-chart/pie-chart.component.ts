import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

declare var google: any;
declare var visualization: any;

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})

export class PieChartComponent implements OnInit {
  @ViewChild('pieChart') pieChartElement: ElementRef;
  @Input() width: string;
  @Input() height: string;
  @Input() title: string;
  @Input() is3d: boolean;
  @Input() data: any[];

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawPieChart);
    function drawPieChart() {
      var pieChartData = google.visualization.arrayToDataTable([
        ['Task', 'Hours'],
        ['Eat', 2],
        ['Sleep', 8],
        ['Code', 12],
        ['Commute', 3]
      ]);

      var options = {
        title: "Angular Pie Chart",
        is3D: false
      };

      var chart = new google.visualization.PieChart(document.getElementById("pieChart"));
      chart.draw(pieChartData, options);
    }
  }
}