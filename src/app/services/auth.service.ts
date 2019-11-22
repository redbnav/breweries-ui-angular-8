import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Breweries } from "../interfaces/brewereis.model";
import { BreweriesSummery } from "../interfaces/breweriesSummery.model";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class AuthService {
  constructor(protected http: HttpClient) {}
  api: String = environment.services.server;
  breweries: Breweries[] = [];

  getBreweries(perPage: number, currentPage: number) {
    let obs = this.http.get(
      `${this.api}/breweries?items=${perPage}&page=${currentPage}`
    );
    return obs;
  }

  getLocalBreweries(location) {
    let obs = this.http.get(`${this.api}/localBreweries/${location}`);
    return obs;
  }

  getStateWiseBreweries(limit?) {
    let url = limit
      ? `${this.api}/getStateWiseCount?limit=${limit}`
      : `${this.api}/getStateWiseCount`;
    let obs = this.http.get(url);
    return obs;
  }
}
