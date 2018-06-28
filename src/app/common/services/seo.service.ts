import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  useFactory: () => new SeoService(),
})
export class SeoService {

  constructor() { }
}
