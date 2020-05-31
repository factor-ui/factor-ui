import { Component, OnInit } from '@angular/core';
import { FilesService } from 'factor-utils';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  files: any[];

  constructor(
    private filesService: FilesService,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }
  selectFiles(category?) {
    this.filesService.open((value) => {
      this.files = this.files ? this.files.concat(value) : value;
    }, { multiple: true });
  }
  removeFile(file, parent, event) {
    event.stopPropagation();
    parent = parent.splice(parent.indexOf(file), 1);
  }
  uploadFiles() {
    this.files.forEach((file) => {
      this.http.post(
        'http://localhost:8000/api/system/noop',
        file,
        { reportProgress: true, observe: 'events' }
      ).subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            file.uploadStatus = 'sending';
            break;
          case HttpEventType.UploadProgress:
            file.uploadProgress = Math.round( (100 * event.loaded) / event.total );
            break;
          case HttpEventType.Response:
            file.uploadStatus = event.body ? 'uploaded' : 'failed';
            break;
        }
      }, (error: any) => {
        file.uploadStatus = 'failed';
      });
    });
  }

}
