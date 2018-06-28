import { Component } from '@angular/core';
import { MediaQueryService } from '../media-queries/media-query.service';

@Component({
  selector: 'cbj-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {

  constructor(public mQuery: MediaQueryService) {}
}
