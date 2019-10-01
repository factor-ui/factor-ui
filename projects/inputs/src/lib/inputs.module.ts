import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonModule as FactorCommonModule } from 'factor-common';

import { FilePickerComponent } from './file-picker/file-picker.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [
    FilePickerComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
    FactorCommonModule
  ],
  exports: [
    FilePickerComponent,
    RatingComponent
  ]
})
export class InputsModule { }
