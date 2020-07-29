import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cartSubject = new BehaviorSubject(null);
  public cart$ = this.cartSubject.asObservable();

  constructor() {}

  public emitData(data) {
    this.cartSubject.next(data);
  }
}
