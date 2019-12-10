import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthService } from "./services/auth.service";
import { SlideMenuModule } from "cuppa-ng2-slidemenu/cuppa-ng2-slidemenu";
import { GoogleMapsModule } from "@angular/google-maps";
import { ChartsModule } from "ng2-charts";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BreweriesComponent } from "./breweries/breweries.component";
import { HeaderComponent } from "./header/header.component";
import { CardsComponent } from "./cards/cards.component";
import { MapsComponent } from "./maps/maps.component";
import {
  MatToolbarModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule
} from "@angular/material";
import { ChartsComponent } from "./charts/charts.component";
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BreweriesComponent,
    HeaderComponent,
    CardsComponent,
    MapsComponent,
    ChartsComponent,
    AuthComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SlideMenuModule,
    GoogleMapsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    ChartsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
