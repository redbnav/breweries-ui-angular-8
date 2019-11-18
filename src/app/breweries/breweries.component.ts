import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-breweries",
  templateUrl: "./breweries.component.html",
  styleUrls: ["./breweries.component.css"]
})
export class BreweriesComponent implements OnInit {
  private brewService: AuthService;
  breweries: {};
  headers: any[];

  constructor(brewService: AuthService) {
    this.brewService = brewService;
  }

  ngOnInit() {
    this.getBreweries();
  }
  getBreweries() {
    this.brewService.getBreweries().subscribe(result => {
      this.breweries = result;
      console.log(result);
    });
  }
}
