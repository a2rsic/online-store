import { Component, OnInit } from "@angular/core";
import { ProductsService } from "./products.service";
import { IProduct } from "./product.interface";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  public products: IProduct[] = [];
  public total: number;
  public isLoading = false;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.isLoading = true;
    this.productsService.getProducts().subscribe(
      (response) => {
        console.log("response", response);
        this.isLoading = false;
        this.products = response.products;
        this.total = response.count;
      },
      (error) => alert("Something went wrong")
    );
  }
}
