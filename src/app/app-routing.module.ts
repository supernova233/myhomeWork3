import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCtrlPanelComponent } from './admin-ctrl-panel/admin-ctrl-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotfundComponent } from './page-notfund/page-notfund.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: '', redirectTo:"/admin",pathMatch:"full"},
  {path: 'admin', component:AdminCtrlPanelComponent,children:[
    {path:'',redirectTo:"/admin/dashboard",pathMatch:"full"},
    {path:'dashboard',component:DashboardComponent},
    {path:'product',component:ProductComponent},
    {path:'product-detail',component:ProductDetailComponent},
  ]},
  {path: '**', redirectTo:"/404",pathMatch:"full"},
  {path:'404',component:PageNotfundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
