import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BreweriesComponent } from "./breweries/breweries.component";
import { MapsComponent } from "./maps/maps.component";

const routes: Routes = [
  { path: "", component: MapsComponent },
  { path: "reports", component: BreweriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
