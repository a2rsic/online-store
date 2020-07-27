export interface IProduct {
  name: string;
  imageUrls: Array<string>;
  price: number;
  code: string;
  id: string;
  createdAt: string;
}

export interface IProductsResponse {
  products: IProduct[];
  count: number;
}
