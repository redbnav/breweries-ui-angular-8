import { Component, OnInit } from "@angular/core";
import { MapInfoWindow, MapMarker } from "@angular/google-maps";
import { AuthService } from "./services/auth.service";
import { Card } from "./interfaces/cards.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(public authService: AuthService) {}

  ngOnInit() {}
}
