import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public setValue;

  public onClick(value) {
    if (value === 1) {
      this.setValue = "products";
    } else if (value === 2) {
      this.setValue = "about";
    } else {
      this.setValue = "contact";
    }
  }
}
