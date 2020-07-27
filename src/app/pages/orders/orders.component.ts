import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"],
})
export class OrdersComponent implements OnInit {
  public displayedColumns = ["order_id", "created_at", "items_count", "total"];

  constructor() {}

  ngOnInit() {}
}
