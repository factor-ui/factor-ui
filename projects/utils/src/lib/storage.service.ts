import { Component, Inject, Injectable, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import * as CryptoJS from 'crypto-js';

// Only works on client storage
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject('FactorUtilsConfiguration') private configuration
  ) { }

  delete(key: string, storage?) {
    if (isPlatformBrowser(this.platformId)) {
      if (!storage || typeof storage == 'string') {
        switch (storage) {
          case 'localStorage':
            delete localStorage[key];
            break;
          default:
            delete sessionStorage[key];
            break;
        }
      } else if (typeof storage == 'object') {
        delete storage[key];
      }
    }
  }
  get(key: string, storage?): any {
    let parsedValue: any;
    if (isPlatformBrowser(this.platformId)) {
      try {
        parsedValue = JSON.parse(this.getValue(key, storage));
      } catch (err) {
        parsedValue = this.getValue(key, storage);
      }
    }
    return parsedValue;
  }
  getValue(key: string, storage?: any): any {
    let value: any;
    if (!storage || typeof storage == 'string') {
      switch (storage) {
        case 'localStorage':
          value = localStorage[key];
          break;
        default:
          value = sessionStorage[key];
          break;
      }
    } else if (typeof storage == 'object') {
      value = storage[key];
    }
    return this.decrypt(value);
  }
  decrypt(value: string) {
    if (value !== null &&
      value !== undefined &&
      value !== '' &&
      this.configuration &&
      this.configuration.storage &&
      this.configuration.storage.encryptionSecret) {
      const decryptedValue = CryptoJS.AES.decrypt(value, this.configuration.storage.encryptionSecret);
      value = decryptedValue.toString(CryptoJS.enc.Utf8);
    }
    return value;
  }
  encrypt(value: string) {
    if (value !== null &&
      value !== undefined &&
      value !== '' &&
      this.configuration &&
      this.configuration.storage &&
      this.configuration.storage.encryptionSecret) {
      value = CryptoJS.AES.encrypt(value, this.configuration.storage.encryptionSecret);
    }
    return value.toString();
  }
  set(key: string, value: any, storage?) {
    if (isPlatformBrowser(this.platformId)) {
      const valueEncrypted = this.encrypt(JSON.stringify(value));
      if (!storage || typeof storage == 'string') {
        switch (storage) {
          case 'localStorage':
            localStorage[key] = valueEncrypted;
            break;
          default:
            sessionStorage[key] = valueEncrypted;
            break;
        }
      } else {
        storage[key] = valueEncrypted;
      }
    }
  }
}
