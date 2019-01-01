import { NgModule } from '@angular/core';
import { FilePickerComponent } from './file-picker/file-picker.component';
import { InvalidFeedbackComponent } from './invalid-feedback/invalid-feedback.component';
import { TextInputComponent } from './text-input/text-input.component';

@NgModule({
  declarations: [
    FilePickerComponent,
    InvalidFeedbackComponent,
    TextInputComponent
  ],
  imports: [
  ],
  exports: [
    FilePickerComponent,
    InvalidFeedbackComponent
  ]
})
export class InputsModule { }
