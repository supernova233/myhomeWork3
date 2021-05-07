import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { AdminCtrlPanelComponent } from './admin-ctrl-panel/admin-ctrl-panel.component';
import { PageNotfundComponent } from './page-notfund/page-notfund.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ProductComponent,
    ProductDetailComponent,
    SideNavbarComponent,
    AdminCtrlPanelComponent,
    PageNotfundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
