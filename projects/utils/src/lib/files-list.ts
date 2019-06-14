import { BehaviorSubject, Observable } from "rxjs";

declare var document: any;

export class FilesList {
  private fileInput: HTMLInputElement;
  valueChangesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);
  valueChanges: Observable<any[]> = this.valueChangesSubject.asObservable();

  constructor(options: any) {
    this.fileInput = document.createElement('input');
    this.fileInput.style.display = 'none';
    this.fileInput.type = 'file';
    this.fileInput.accept = options && options.accept? options.accept : '';
    this.fileInput.multiple = options && options.multiple;
    this.fileInput.addEventListener('change', (event: any) => {
      const reader = new FileReader();
      this.loadValue(event.target.files);
    });
    document.body.appendChild(this.fileInput);
  }
  private loadValue(files) {
    if (files && files.length > 0) {
      let data: any[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files.item(i);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          data.push({
            data: reader.result,
            lastModifiedDate: file.lastModifiedDate,
            name: file.name,
            size: file.size/*,
            type: file.type*/
          });
          if (data.length == files.length) {
            this.valueChangesSubject.next(data.length > 0 ? data : null);
          }
        };
      }
    }
  }
  public open() {
    this.fileInput.click();
  }
}
