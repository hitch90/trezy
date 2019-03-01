import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { AdminChannelFormComponent } from './admin-channel-form/admin-channel-form.component';
import { AdminChannelsComponent } from './admin-channels/admin-channels.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminProductFormComponent } from './admin-product-form/admin-product-form.component';
import {AdminProductsComponent} from "./admin-products/admin-products.component";
import {AdminProducersComponent} from "./admin-producers/admin-producers.component";

const routes: Routes = [
  {
    path: 'admin',
    component: AdminHomepageComponent,
    canActivate: []
  },
  {
    path: 'admin/add-channel',
    component: AdminChannelFormComponent,
    canActivate: []
  },
  {
    path: 'admin/edit-channel/:id',
    component: AdminChannelFormComponent,
    canActivate: []
  },
  {
    path: 'admin/channels',
    component: AdminChannelsComponent,
    canActivate: []
  },
  {
    path: 'admin/categories',
    component: AdminCategoriesComponent,
    canActivate: []
  },
  {
    path: 'admin/producers',
    component: AdminProducersComponent,
    canActivate: []
  },
  {
    path: 'admin/add-product',
    component: AdminProductFormComponent,
    canActivate: []
  },
  {
    path: 'admin/products',
    component: AdminProductsComponent,
    canActivate: []
  },
  {
    path: 'admin/edit-product/:id',
    component: AdminProductFormComponent,
    canActivate: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
