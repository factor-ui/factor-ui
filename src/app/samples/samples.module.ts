import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplesRoutingModule } from './samples-routing.module';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';

@NgModule({
  declarations: [
    InfiniteScrollComponent
  ],
  imports: [
    SamplesRoutingModule,
    CommonModule
  ]
})
export class SamplesModule { }
