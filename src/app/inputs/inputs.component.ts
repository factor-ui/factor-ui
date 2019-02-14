import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {
  options: any[] = [
    {label:'Male', value:'male'},
    {label:'Female', value: 'female'}
  ];
  entityForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.entityForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      company: 'Factor',
      gender: ''
    });
  }

}
