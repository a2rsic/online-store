import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  private regEx = "^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$";
  public email = new FormControl("", [Validators.required, Validators.email]);
  public password = new FormControl("", [
    Validators.required,
    Validators.pattern(this.regEx),
  ]);
  constructor(private router: Router) {}

  ngOnInit() {}

  getEmailErrorMessage() {
    if (this.email.hasError("required")) {
      return "Email is required";
    }

    return this.email.hasError("email") ? "Email is invalid" : "";
  }

  getPasswordErrorMessage() {
    if (this.password.hasError("required")) {
      return "Password is required";
    }

    return this.password.hasError("pattern")
      ? "Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter and 1 digit"
      : "";
  }

  public onSubmit() {
    const data = {
      email: this.email.value,
      password: this.password.value,
    };

    if (this.email.valid && this.password.valid) {
      console.log("data", data);
      this.router.navigateByUrl("/products");
    }
  }
}
