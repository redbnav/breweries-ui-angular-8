import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthService } from "./services/auth.service";
import { SlideMenuModule } from "cuppa-ng2-slidemenu/cuppa-ng2-slidemenu";
import { GoogleMapsModule } from "@angular/google-maps";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BreweriesComponent } from "./breweries/breweries.component";
import { HeaderComponent } from "./header/header.component";
import { CardsComponent } from "./cards/cards.component";
import { MapsComponent } from "./maps/maps.component";
import { MatToolbarModule, MatButtonModule } from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    BreweriesComponent,
    HeaderComponent,
    CardsComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SlideMenuModule,
    GoogleMapsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
