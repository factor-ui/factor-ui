import { NgModule } from '@angular/core';
import { FilePickerComponent } from './file-picker/file-picker.component';
import { InvalidFeedbackComponent } from './invalid-feedback/invalid-feedback.component';

@NgModule({
  declarations: [
    FilePickerComponent,
    InvalidFeedbackComponent
  ],
  imports: [
  ],
  exports: [
    FilePickerComponent,
    InvalidFeedbackComponent
  ]
})
export class InputsModule { }
