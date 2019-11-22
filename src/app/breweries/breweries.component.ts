import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

import { AuthService } from "../services/auth.service";
import { Breweries } from "../interfaces/brewereis.model";

@Component({
  selector: "app-breweries",
  templateUrl: "./breweries.component.html",
  styleUrls: ["./breweries.component.css"]
})
export class BreweriesComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  private brewService: AuthService;
  // breweries: {};
  // headers: any[];

  currentPage = 1;
  totalCount;
  pageSize = 25;
  pageSizeOptions = [25, 50, 100, 200];

  breweries: Breweries[] = [];
  displayedColumns: string[] = [];
  dataSource;

  constructor(brewService: AuthService) {
    this.brewService = brewService;
  }

  ngOnInit() {
    this.getBreweries(this.pageSize, this.currentPage);
  }
  getBreweries(listsPerPage, pageNumber) {
    this.brewService
      .getBreweries(listsPerPage, pageNumber)
      .subscribe(result => {
        this.totalCount = result["count"];
        this.breweries = result["list"];
        this.displayedColumns = Object.keys(this.breweries[0]);
        this.dataSource = new MatTableDataSource(this.breweries);
        // this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  onPageChange(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.pageSize = pageData.pageSize;
    this.getBreweries(this.pageSize, this.currentPage);
  }
}
