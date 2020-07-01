import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

import { StorageService } from 'factor-utils';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {
  key: string;
  value: string;
  form: FormGroup;

  constructor(
    private storageService: StorageService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      key: '',
      value: ''
    });
  }
  save(): void {
    this.storageService.set(this.form.value.key, this.form.value.value);
  }

}
