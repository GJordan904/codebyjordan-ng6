import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  useClass: CacheService,
})
export class CacheService {

  constructor(private http: HttpClient) {
    this.init();
  }

  private init(): void {}
}