import { Component, OnInit, ViewChild } from "@angular/core";
import { MapInfoWindow, MapMarker } from "@angular/google-maps";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-maps",
  templateUrl: "./maps.component.html",
  styleUrls: ["./maps.component.css"]
})
export class MapsComponent implements OnInit {
  constructor(public authService: AuthService) {}
  center;
  local;
  // title = "client";
  // zoom = 6;
  // // center: google.maps.LatLngLiteral;
  // options: google.maps.MapOptions = {
  //   mapTypeId: "hybrid",
  //   zoomControl: false,
  //   scrollwheel: false,
  //   disableDoubleClickZoom: true,
  //   maxZoom: 15,
  //   minZoom: 8
  // };

  markerPositions: google.maps.LatLngLiteral[] = [
    { lat: -90.484357, lng: 38.774154 }
  ];
  markerOptions = { draggable: false };

  ngOnInit() {
    // console.log("calling init function");
    this.getUserLocation();
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(data => {
        this.center = { lat: data.coords.latitude, lng: data.coords.longitude };
        this.local = `${data.coords.longitude},${data.coords.latitude}`;
        console.log(this.local);
        // this.getLocalBreweries(this.local);
        this.markerPositions.push();
        console.log(
          `lat: ${data.coords.latitude}, lng: ${data.coords.longitude}`
        );
      });
    } else {
      console.log("no loc");
    }
  }

  mapclick(event: google.maps.MouseEvent) {
    console.log(event);
  }

  getLocalBreweries(local) {
    this.authService.getLocalBreweries(local).subscribe(result => {
      console.log(result);
    });
  }

  // addMarker(event: google.maps.MouseEvent) {
  //   this.markerPositions.push(event.latLng.toJSON());
  // }

  // @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;

  // center = { lat: 24, lng: 12 };
  // markerOptions = { draggable: false };
  // markerPositions: google.maps.LatLngLiteral[] = [];
  // zoom = 4;
  // display?: google.maps.LatLngLiteral;

  // options: google.maps.MapOptions = {
  //   center: { lat: 24, lng: 12 }
  // };

  // addMarker(event: google.maps.MouseEvent) {
  //   this.markerPositions.push(event.latLng.toJSON());
  //   console.log(event);
  // }

  // move(event: google.maps.MouseEvent) {
  //   this.display = event.latLng.toJSON();
  // }

  // openInfoWindow(marker: MapMarker) {
  //   this.infoWindow.open(marker);
  // }

  // removeLastMarker() {
  //   this.markerPositions.pop();
  // }
}
