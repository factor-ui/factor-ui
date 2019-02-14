import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilePickerComponent } from './file-picker/file-picker.component';
import { InvalidFeedbackComponent } from './invalid-feedback/invalid-feedback.component';
import { TextInputComponent } from './text-input/text-input.component';
import { SelectComponent } from './select/select.component';
import { ListComponent } from './list/list.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [
    FilePickerComponent,
    InvalidFeedbackComponent,
    SelectComponent,
    TextInputComponent,
    ListComponent,
    TextAreaComponent,
    RatingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilePickerComponent,
    InvalidFeedbackComponent,
    SelectComponent,
    TextInputComponent,
    ListComponent,
    TextAreaComponent,
    RatingComponent
  ]
})
export class InputsModule { }
