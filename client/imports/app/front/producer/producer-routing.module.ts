import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProducerComponent} from "./producer/producer.component";

const routes: Routes = [
  {
    path: 'producer/:id',
    component: ProducerComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProducerRoutingModule {}
