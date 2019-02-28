import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { AdminChannelFormComponent } from './admin-channel-form/admin-channel-form.component';
import {AdminChannelsComponent} from "./admin-channels/admin-channels.component";
import {AdminCategoriesComponent} from "./admin-categories/admin-categories.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
