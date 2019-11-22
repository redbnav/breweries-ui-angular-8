import { Component, OnInit, ViewChild } from "@angular/core";
import { AuthService } from "../services/auth.service";
import * as _ from "lodash";

@Component({
  selector: "app-charts",
  templateUrl: "./charts.component.html",
  styleUrls: ["./charts.component.css"]
})
export class ChartsComponent implements OnInit {
  constructor(public authService: AuthService) {}

  public pieChartLabels: any[] = [];
  public pieChartData: any[] = [];
  public pieChartType = "pie";
  public pieChartColors = [{ backgroundColor: [] }];

  ngOnInit() {
    this.getSummeryData();
  }

  getSummeryData() {
    this.authService.getStateWiseBreweries().subscribe(result => {
      for (let i = 0; i <= Object.values(result).length; i++) {
        let color = Math.floor(Math.random() * 1000000);
        this.pieChartColors[0].backgroundColor.push("#" + color);
      }
      this.pieChartLabels = _.map(result, el => el.state);
      this.pieChartData = _.map(result, el => el.state_breweries);
    });
  }
}
