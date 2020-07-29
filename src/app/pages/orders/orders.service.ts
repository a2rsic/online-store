import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BASE_URL } from "src/app/utils/api";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class OrdersService {
  private url = `${BASE_URL}`;

  constructor(private http: HttpClient) {}

  public getOrdersHistory(userId: string): Observable<any> {
    const token = JSON.parse(localStorage.getItem("access_token"));

    const httpOptions: any = {
      params: {
        skip: 0,
        limit: 10,
      },
      headers: {
        Authorization: token.access_token,
      },
    };
    return this.http.get<any>(`${this.url}users/${userId}/orders`, httpOptions);
  }

  public sendOrder(userId: string, data: any): Observable<any> {
    const token = JSON.parse(localStorage.getItem("access_token"));
    const body = JSON.stringify(data);

    const headers = {
      Authorization: token.access_token,
    };
    return this.http.post<any>(`${this.url}user/${userId}/orders`, body, {
      headers,
    });
  }
}
