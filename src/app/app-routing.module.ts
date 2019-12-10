import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BreweriesComponent } from "./breweries/breweries.component";
import { MapsComponent } from "./maps/maps.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";

const routes: Routes = [
  { path: "", component: MapsComponent },
  { path: "reports", component: BreweriesComponent },
  { path: "login", component: LoginComponent },
  { path: "signpu", component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
