import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';


const routes: Routes = [
  {path:'',component:ProductComponent},
  {path:'Product',component:ProductComponent},
  {path:'ViewProduct',component:ViewproductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
