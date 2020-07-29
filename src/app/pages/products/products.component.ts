import { Component, OnInit } from "@angular/core";

import { ProductsService } from "./products.service";
import { CartService } from "../cart/cart.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  public products = [];
  public isLoading = false;
  public quantity = 0;
  public count = 0;
  public shoppingCart = [];

  public total = 0;
  public pageSize = 8;
  public currentPage = 0;

  private initialFilters = {
    skip: 0,
    limit: 8,
  };

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.loadProducts(this.initialFilters);
  }

  public handlePage(event: any) {
    if (event.pageIndex === this.currentPage + 1) {
      this.initialFilters = {
        ...this.initialFilters,
        skip: this.initialFilters.skip + 8,
      };
      this.loadProducts(this.initialFilters);
    } else if (event.pageIndex === this.currentPage - 1) {
      this.initialFilters = {
        ...this.initialFilters,
        skip: this.initialFilters.skip - 8,
      };
      this.loadProducts(this.initialFilters);
    }
    this.currentPage = event.pageIndex;
  }

  public addProductToCart(product) {
    this.quantity++;
    this.shoppingCart.push(product);
    const products = [...new Set(this.shoppingCart)];

    const data = {
      products,
      quantity: this.quantity,
    };
    this.cartService.emitData(data);
  }

  private loadProducts(filters): void {
    this.isLoading = true;

    this.productsService.getProducts(filters).subscribe(
      (response) => {
        this.isLoading = false;
        this.products = response.products.map((product) => ({
          product,
          count: 0,
        }));
        this.total = response.count;
      },
      (error) => alert("Something went wrong")
    );
  }
}
