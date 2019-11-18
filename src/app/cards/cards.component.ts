import { Component, OnInit, Input, AfterContentInit } from "@angular/core";
import { Card } from "../interfaces/cards.model";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.css"]
})
export class CardsComponent implements OnInit, AfterContentInit {
  cards: Card[] = [];

  constructor(public authSerive: AuthService) {}

  getImage(el) {
    return el["image"];
  }

  getStateWiseCards() {
    this.authSerive.getStateWiseBreweries().subscribe((cardsData: Card[]) => {
      this.cards = cardsData;
    });
  }

  ngAfterContentInit() {}
  ngOnInit() {
    // this.getStateWiseCards();
  }
}
