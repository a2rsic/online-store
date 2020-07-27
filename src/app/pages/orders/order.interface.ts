import { IProduct } from "../products/product.interface";

export interface IOrder {
  id?: string;
  createdAt?: string;
  products?: IProduct[];
  total?: number;
}

export interface IOrdersResponse {
  orders: IOrder[];
  count: number;
}
