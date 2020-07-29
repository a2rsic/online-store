import { Component, OnInit } from "@angular/core";

import { OrdersService } from "./orders.service";
import { LoginService } from "../login/login.service";
import { IOrder } from "./order.interface";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"],
})
export class OrdersComponent implements OnInit {
  public orders: IOrder[] = [];
  public total = 0;
  public pageSize = 10;
  public currentPage = 0;

  private filters = {
    skip: 0,
    limit: 10,
  };

  constructor(
    private ordersService: OrdersService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.getUserOrders(this.filters);
  }

  private getUserOrders(filters) {
    this.loginService.getUserInfo().subscribe((user) => {
      this.ordersService
        .getOrdersHistory(user.id, filters)
        .subscribe((response) => {
          console.log("orders", response);
          this.orders = response.orders;
          this.total = response.count;
        });
    });
  }
}
