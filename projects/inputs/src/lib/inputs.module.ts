import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonModule as FactorCommonModule } from 'factor-common';

import { FilePickerComponent } from './file-picker/file-picker.component';
import { InvalidFeedbackComponent } from './invalid-feedback/invalid-feedback.component';
import { ListComponent } from './list/list.component';
import { RatingComponent } from './rating/rating.component';
import { SelectComponent } from './select/select.component';
import { TextInputComponent } from './text-input/text-input.component';
import { TextAreaComponent } from './text-area/text-area.component';

@NgModule({
  declarations: [
    FilePickerComponent,
    InvalidFeedbackComponent,
    ListComponent,
    RatingComponent,
    SelectComponent,
    TextInputComponent,
    TextAreaComponent
  ],
  imports: [
    CommonModule,
    FactorCommonModule
  ],
  exports: [
    FilePickerComponent,
    InvalidFeedbackComponent,
    ListComponent,
    RatingComponent,
    SelectComponent,
    TextInputComponent,
    TextAreaComponent
  ]
})
export class InputsModule { }
