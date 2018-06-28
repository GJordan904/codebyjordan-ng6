import { Component } from '@angular/core';
import { CbjComponent } from '../../common/cbj-component/cbj-component.class';
import { BreakpointState } from '../../common/media-queries/breakpoints';
import { MediaQueryService } from '../../common/media-queries/media-query.service';

@Component({
  selector: 'cbj-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss'],
})
export class BioComponent extends CbjComponent {
  params = { lang: ['typescript', 'scss', 'html5'] };
  languages = [
    { name: 'HTML5', level: 95 },
    { name: 'Javascript', level: 90 },
    { name: 'Typescript', level: 85 },
    { name: 'CSS', level: 85 },
    { name: 'PHP', level: 80 },
    { name: 'SASS', level: 80 },
    { name: 'MySQL', level: 75 },
  ];
  frameworks = [
    { name: 'Angular@latest', level: 90 },
    { name: 'Laravel 5', level: 90 },
    { name: 'Bootstrap 4', level: 90 },
    { name: 'Vue 2', level: 80 },
    { name: 'jQuery', level: 70 },
    { name: 'Wordpress', level: 65 },
  ];
  toolsLeft = [
    { name: 'Webpack', level: 90 },
    { name: 'Amazon Web Services', level: 75 },
    { name: 'Apache', level: 75 },
    { name: 'Babel', level: 70 },
  ];
  toolsRight = [
    { name: 'Git', level: 80 },
    { name: 'Gulp', level: 75 },
    { name: 'Ubuntu', level: 75 },
    { name: 'PHP Storm', level: 80 },
  ];

  public infoSpan = 12;
  public imgSpan = 0;

  constructor(public mQuery: MediaQueryService) {
    super(mQuery);
  }

  protected adjustLayout(bps: BreakpointState): void {
    if (bps.mobile) {
      this.infoSpan = 12;
      this.imgSpan = 0;
    }
  }
}
