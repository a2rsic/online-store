import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  public latitude = 44.801543;
  public longitude = 20.4519599;

  constructor() {}

  ngOnInit() {}
}
