import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable()
export class AuthService {
  constructor(protected http: HttpClient) {}
  api: String = environment.services.server;

  getBreweries() {
    let obs = this.http.get(`${this.api}/breweries`);
    return obs;
  }

  getLocalBreweries(location) {
    let obs = this.http.get(`${this.api}/localBreweries/:${location}`);
    return obs;
  }

  getStateWiseBreweries() {
    let obs = this.http.get(`${this.api}/getStateWiseCount`);
    return obs;
  }
}
