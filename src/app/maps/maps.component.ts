import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-maps",
  templateUrl: "./maps.component.html",
  styleUrls: ["./maps.component.css"]
})
export class MapsComponent implements OnInit {
  center;
  title = "client";
  zoom = 6;
  // center: google.maps.LatLngLiteral;
  markerPositions: google.maps.LatLngLiteral[] = [];
  options: google.maps.MapOptions = {
    mapTypeId: "hybrid",
    zoomControl: false,
    minZoom: 2,
    maxZoom: 10
  };

  ngOnInit() {
    this.getUserLocation();
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(data => {
        this.center = { lat: data.coords.latitude, lng: data.coords.longitude };
        console.log(
          `lat: ${data.coords.latitude}, lng: ${data.coords.longitude}`
        );
      });
    } else {
      console.log("no loc");
    }
  }
}
