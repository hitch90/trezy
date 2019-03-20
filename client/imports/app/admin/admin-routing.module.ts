import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage/admin-homepage.component';
import { AdminChannelFormComponent } from './admin-channel-form/admin-channel-form.component';
import { AdminChannelsComponent } from './admin-channels/admin-channels.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminProductFormComponent } from './admin-product-form/admin-product-form.component';
import {AdminProductsComponent} from "./admin-products/admin-products.component";
import {AdminProducersComponent} from "./admin-producers/admin-producers.component";
import {AdminAttributesComponent} from "./admin-attributes/admin-attributes.component";
import {AdminTestsComponent} from "./admin-tests/admin-tests.component";
import {AdminTestsFormComponent} from "./admin-tests-form/admin-tests-form.component";
import {AuthGuard} from "../_core/_guards";

const routes: Routes = [
  {
    path: 'admin',
    component: AdminHomepageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/add-channel',
    component: AdminChannelFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/edit-channel/:id',
    component: AdminChannelFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/channels',
    component: AdminChannelsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/categories',
    component: AdminCategoriesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/attributes',
    component: AdminAttributesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/producers',
    component: AdminProducersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/add-product',
    component: AdminProductFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/tests',
    component: AdminTestsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/add-test',
    component: AdminTestsFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/edit-test/:id',
    component: AdminTestsFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/products',
    component: AdminProductsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/edit-product/:id',
    component: AdminProductFormComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
