import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CacheService } from 'factor-utils';

@Component({
  selector: 'app-cache',
  templateUrl: './cache.component.html',
  styleUrls: ['./cache.component.scss']
})
export class CacheComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private cacheService: CacheService
  ) { }

  ngOnInit() {
    this.callCachableUrl();
  }
  callCachableUrl() {
    this.http.get('assets/cachable-url.json').subscribe((response) => {
      console.log(response);
    });
  }
  invalidateUrl(url) {
    this.cacheService.invalidate(url);
  }

}
