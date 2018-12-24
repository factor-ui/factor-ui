import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  delete(key: string, storage?) {
    if (storage) {
      delete storage[key];
    }else{
      delete sessionStorage[key];
    }
  }
  get(key: string, storage?) {
    let parsedValue;
    let value = storage ? storage[key] : sessionStorage[key];
    if (value) {
      try {
        parsedValue = JSON.parse(value);
      } catch (err) {
        parsedValue = value;
      }
    }
    return parsedValue;
  }
  set(key: string, value: any, storage?) {
    if (storage) {
      storage[key] = JSON.stringify(value);
    } else {
      sessionStorage[key] = JSON.stringify(value);
    }
  }
}
