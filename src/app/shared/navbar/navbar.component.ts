import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { LoginService } from "src/app/pages/login/login.service";
import { CartService } from "src/app/pages/cart/cart.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  public user: {
    emal: string;
    firstName: string;
    id: string;
    lastName: string;
  };

  public quantity: number;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.loadUser();
    this.cartService.cart$.subscribe((data) => {
      if (data) {
        this.quantity = data.quantity;
      }
    });
  }

  public logout() {
    this.loginService.logout();
  }

  public navigateToHomePage() {
    this.router.navigateByUrl("/");
  }
  public navigateToCartPage() {
    this.router.navigateByUrl("/shopping-cart");
  }

  public navigateToLoginPage() {
    this.router.navigateByUrl("/login");
  }

  private loadUser() {
    const loggedIn = this.loginService.isLoggedIn();
    if (loggedIn) {
      this.loginService.getUserInfo().subscribe((response) => {
        this.user = response;
      });
    }
  }
}
