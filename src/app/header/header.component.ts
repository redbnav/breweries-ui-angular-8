import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  private menuItemsArray: any[] = [
    { title: "Home", link: "#" },
    { title: "Reports", link: "/reports" }
  ];
  config = {
    animation: "stand"
  };

  ngOnInit() {}

  public onMenuClose() {}
  public onMenuOpen() {}
  private onItemSelect(item: any) {
    console.log(item);
  }
}
