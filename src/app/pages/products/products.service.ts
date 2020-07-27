import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BASE_URL } from "../../utils/api";
import { Observable } from "rxjs";
import { IProductsResponse, IProduct } from "./product.interface";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  private url = `${BASE_URL}products`;

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<IProductsResponse> {
    const params: any = {
      skip: 0,
      limit: 8,
    };

    return this.http.get<IProductsResponse>(this.url, { params });
  }

  public getProduct(productId: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.url}/${productId}`);
  }
}
