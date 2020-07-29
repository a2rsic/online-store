import { Component, OnInit } from "@angular/core";
import { ProductsService } from "./products.service";
import { IProduct } from "./product.interface";
import { CartService } from "../cart/cart.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  public products = [];
  public total: number;
  public isLoading = false;
  public quantity = 0;
  public count = 0;
  public shoppingCart = [];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  public addProductToCart(product, productId: string) {
    this.quantity++;
    this.shoppingCart.push(product);
    const updatedProduct = this.updateProductQuantity(productId);
    const products = [...new Set(this.shoppingCart)];

    const data = {
      products,
      quantity: this.quantity,
    };
    this.cartService.emitData(data);
  }

  private updateProductQuantity(id: string) {
    const updatedProduct = this.shoppingCart.find((item) => {
      return item.product.id === id;
    });
    return updatedProduct.count++;
  }

  private loadProducts(): void {
    this.isLoading = true;
    this.productsService.getProducts().subscribe(
      (response) => {
        this.isLoading = false;
        this.products = response.products.map((product) => ({
          product,
          count: 0,
        }));
        console.log("response", this.products);
        this.total = response.count;
      },
      (error) => alert("Something went wrong")
    );
  }
}
