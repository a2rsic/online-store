import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "src/app/pages/login/login.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  public isLoggedIn: boolean;
  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {
    this.isLoggedIn = this.loginService.isLoggedIn();
  }

  public navigateToHomePage() {
    this.router.navigateByUrl("/");
  }

  public navigateToLoginPage() {
    this.router.navigateByUrl("/login");
  }
}
