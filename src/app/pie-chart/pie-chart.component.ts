import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

declare var google: any;

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
    google.charts.setOnLoadCallback(() => {
      var pieChartData = google.visualization.arrayToDataTable(this.data);

      var options = {
        title: this.title,
        is3D: this.is3d
      };

      var chart = new google.visualization.PieChart(document.getElementById("pieChart"));
      chart.draw(pieChartData, options);
    });
  }
}