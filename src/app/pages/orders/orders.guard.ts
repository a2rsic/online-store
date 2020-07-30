import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";

import { LoginService } from "../login/login.service";

@Injectable({
  providedIn: "root",
})
export class OrdersGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const logged = this.loginService.isLoggedIn();
    if (logged) {
      return true;
    } else {
      this.router.navigate(["login"]);
      return false;
    }
  }
}
