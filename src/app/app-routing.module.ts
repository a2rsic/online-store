import { NgModule } from "@angular/core";
import { RouterModule, Routes, CanActivate } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ProductsComponent } from "./pages/products/products.component";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { ProductDatailsComponent } from "./pages/products/product-datails/product-datails.component";
import { LoginComponent } from "./pages/login/login.component";
import { OrdersComponent } from "./pages/orders/orders.component";
import { LoginGuardService } from "./pages/login/login-guard.service";

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
    path: "product-details",
    component: ProductDatailsComponent,
  },
  {
    path: "orders",
    component: OrdersComponent,
    canActivate: [LoginGuardService],
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
})
export class AppRoutingModule {}
