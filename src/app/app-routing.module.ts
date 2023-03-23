import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { FormProductComponent } from './form-product/form-product.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'' ,redirectTo:'login',pathMatch:'full',  },
  {
    path:'login',
    component:LoginComponent
  },
  {
path:'ex1',
component:OffresEmploiComponent
},
{
  path:'ex2',
  component:ArticleComponent
},

{
path:'addProduct',
component:FormProductComponent
},
{
path:'ListProduits',
component:ProductsComponent
},
{path:'detailProd/:id',
component:DetailProductComponent
},
{
  path:'**',
  component:NotfoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
