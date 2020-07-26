import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./pages/home/home.component";
import { MaterialModule } from "src/app/shared/material/material.module";
import { NavbarComponent } from "./shared/navbar/navbar.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
