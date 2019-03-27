import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {
  file: any[] = [
    
  ];
  options: any[] = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
  ];
  entityForm: FormGroup;
  submitting: boolean;
  submitted: boolean;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.entityForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      message: ['', Validators.required],
      streetAddress: [''],
      country: [''],
      state: [''],
      city: [''],
      rating: [3],
      ratingDisabled: [{value: 3, disabled: true}],
      file: [null]
    });
  }
  submit() {
    this.validateAllFormFields(this.entityForm);
    if (this.entityForm.valid) {
      this.submitted = true;
      this.submitting = true;
      setTimeout(() => {
        this.submitting = false;
      }, 2000);
    }
  }
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

}
