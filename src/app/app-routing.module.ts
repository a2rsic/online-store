import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { ProductsComponent } from "./pages/products/products.component";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { ProductDatailsComponent } from "./pages/products/product-datails/product-datails.component";
import { LoginComponent } from "./pages/login/login.component";
import { OrdersComponent } from "./pages/orders/orders.component";
import { CartComponent } from "./pages/cart/cart.component";
import { OrdersGuard } from "./pages/orders/orders.guard";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "products",
    component: ProductsComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "products/:id",
    component: ProductDatailsComponent,
  },
  {
    path: "orders",
    component: OrdersComponent,
    canActivate: [OrdersGuard],
  },
  {
    path: "shopping-cart",
    component: CartComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [OrdersGuard],
})
export class AppRoutingModule {}
