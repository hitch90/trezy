import { NgModule } from '@angular/core';
import { FrontRoutingModule } from './front-routing.module';
import { HomepageModule } from './homepage/homepage.module';
import { ProductRoutingModule } from './product/product-routing.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { CategoryRoutingModule } from './category/category-routing.module';
import { ChannelModule } from './channel/channel.module';
import { ChannelRoutingModule } from './channel/channel-routing.module';
import { ProducerModule } from './producer/producer.module';
import { ProducerRoutingModule } from './producer/producer-routing.module';

@NgModule({
  imports: [
    FrontRoutingModule,
    HomepageModule,
    ProductModule,
    CategoryModule,
    ProductRoutingModule,
    CategoryRoutingModule,
    ChannelModule,
    ChannelRoutingModule,
    ProducerModule,
    ProducerRoutingModule,

  ],
  declarations: [],
  entryComponents: [],
  providers: []
})
export class FrontModule {}
