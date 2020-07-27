import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BASE_URL } from "src/app/utils/api";

@Injectable({
  providedIn: "root",
})
export class OrdersService {
  private url = `${BASE_URL}users`;

  constructor(private http: HttpClient) {}

  public getOrdersHistory(params) {}
}
