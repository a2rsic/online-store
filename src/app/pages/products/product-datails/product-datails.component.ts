import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ProductsService } from "../products.service";
import { IProduct } from "../product.interface";

@Component({
  selector: "app-product-datails",
  templateUrl: "./product-datails.component.html",
  styleUrls: ["./product-datails.component.scss"],
})
export class ProductDatailsComponent implements OnInit {
  private productId: string;
  public product: IProduct;
  public isLoading = false;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get("id");
    this.loadProduct();
  }

  private loadProduct(): void {
    this.isLoading = true;
    this.productsService.getProduct(this.productId).subscribe(
      (product) => {
        this.isLoading = false;
        this.product = product;
      },
      (error) => {
        this.isLoading = false;
        alert("Something went wrong");
      }
    );
  }
}
