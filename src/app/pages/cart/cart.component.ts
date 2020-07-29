import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { CartService } from "./cart.service";
import { LoginService } from "../login/login.service";
import { OrdersService } from "../orders/orders.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  public products = [];
  public productCount = 0;
  public message = "You have no items in your cart";

  private userId: string;

  constructor(
    private cartService: CartService,
    private loginService: LoginService,
    private ordersService: OrdersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cartService.cart$.subscribe((data) => {
      if (data) {
        this.products = data.products;
      }
    });
    this.getUserId();
  }

  public onSubmit() {
    const isLoggedIn = this.loginService.isLoggedIn();
    const data = this.getBody();

    if (!isLoggedIn) {
      this.router.navigateByUrl("login");
    } else {
      this.ordersService.sendOrder(this.userId, data).subscribe(
        (_) => {
          this.message = "Order succesfully sent";
        },
        (_) =>
          (this.message =
            "Your order faild. Please contact support if this continue happening.")
      );
    }
  }

  public removeProducts() {
    this.products.length = 0;
  }

  public decrementProductQuantity(quantity: number, productId: string) {
    const updatedProduct = this.products.find((item) => {
      return item.product.id === productId;
    });

    if (quantity === 1) {
      this.products = this.products.filter(
        (item) => item.product.id !== productId
      );
    }
    return updatedProduct.count--;
  }

  public getProductTotalAmount(quantity: number, price: number): number {
    return quantity * price;
  }

  private getBody() {
    let item;
    const items = [];
    this.products.forEach((productItem) => {
      const itemsId = productItem.product.id;
      const itemsQuantity = productItem.count;
      item = {
        [itemsId]: itemsQuantity,
      };
      items.push({ ...item });
    });
    return items.reduce((r, c) => Object.assign(r, c), {});
  }

  private getUserId() {
    const isLoggedIn = this.loginService.isLoggedIn();

    if (isLoggedIn) {
      this.loginService
        .getUserInfo()
        .subscribe((user) => (this.userId = user.id));
    }
  }
}
