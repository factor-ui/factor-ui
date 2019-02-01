import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilePickerComponent } from './file-picker/file-picker.component';
import { InvalidFeedbackComponent } from './invalid-feedback/invalid-feedback.component';
import { TextInputComponent } from './text-input/text-input.component';
import { SelectComponent } from './select/select.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    FilePickerComponent,
    InvalidFeedbackComponent,
    SelectComponent,
    TextInputComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilePickerComponent,
    InvalidFeedbackComponent,
    SelectComponent,
    TextInputComponent
  ]
})
export class InputsModule { }
