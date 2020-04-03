import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.scss']
})
export class FilePickerComponent implements OnInit {
  file: any[];
  image: any[];
  code = `<ft-file-picker [(ngModel)]="file" class="mr-3">
  <div class="placeholder p-4 text-center d-flex flex-column justify-content-center align-items-center" *ngIf="!file; else pdfTemplate">
    <ft-icon name="document" collection="factoricons-slim" size="5"></ft-icon>
    <div class="text-center small">Click to upload a pdf</div>
  </div>
</ft-file-picker>`;

  constructor() { }

  ngOnInit(): void {
  }

}
