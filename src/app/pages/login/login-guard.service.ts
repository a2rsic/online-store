import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { LoginService } from "./login.service";

@Injectable()
export class LoginGuardService implements CanActivate {
  constructor(public login: LoginService, public router: Router) {}

  canActivate(): boolean {
    const loggedIn = this.login.isLoggedIn();

    if (loggedIn) {
      return true;
    } else {
      this.router.navigate(["login"]);
      return false;
    }
  }
}
