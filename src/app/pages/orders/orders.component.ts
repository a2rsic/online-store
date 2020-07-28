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
  public total: number;

  constructor(
    private ordersService: OrdersService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.getUserOrders();
  }

  private getUserOrders() {
    this.loginService.getUserInfo().subscribe((user) => {
      this.ordersService.getOrdersHistory(user.id).subscribe((response) => {
        console.log("orders", response);
        this.orders = response.orders;
        this.total = response.count;
      });
    });
  }
}
