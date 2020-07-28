import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { LoginService } from "src/app/pages/login/login.service";

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
  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {
    this.loadUser();
  }

  public logout() {
    this.loginService.logout();
  }

  public navigateToHomePage() {
    this.router.navigateByUrl("/");
  }

  public navigateToLoginPage() {
    this.router.navigateByUrl("/login");
  }

  private loadUser() {
    this.loginService.getUserInfo().subscribe((response) => {
      this.user = response;
    });
  }
}
