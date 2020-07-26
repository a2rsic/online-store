import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [
    CommonModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
  ],
})
export class MaterialModule {}
