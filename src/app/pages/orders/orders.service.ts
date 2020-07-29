import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BASE_URL } from "src/app/utils/api";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class OrdersService {
  private url = `${BASE_URL}users`;

  constructor(private http: HttpClient) {}

  public getOrdersHistory(
    userId: string,
    filters: { skip: number; limit: number }
  ): Observable<any> {
    const token = JSON.parse(localStorage.getItem("access_token"));

    const httpOptions: any = {
      params: {
        skip: filters.skip,
        limit: filters.limit,
      },
      headers: {
        Authorization: token.access_token,
      },
    };
    return this.http.get<any>(`${this.url}/${userId}/orders`, httpOptions);
  }

  public sendOrder(userId: string, data: any): Observable<any> {
    const token = JSON.parse(localStorage.getItem("access_token"));
    const body = JSON.stringify(data);

    const headers = {
      Authorization: token.access_token,
      "Content-Type": "application/json",
    };
    return this.http.post<any>(`${this.url}/${userId}/orders`, body, {
      headers,
    });
  }
}
