import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ICONS, SVGIconEntry } from './common/svg/svg.icons';

@Component({
  selector: 'cbj-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {

  constructor(icr: MatIconRegistry, private sani: DomSanitizer) {
    this.iconFactory().forEach(ico => {
      icr.addSvgIconInNamespace(ico.ns, ico.name, ico.url);
    });
  }

  private iconFactory(): SVGIconEntry[] {
    return ICONS.map(ico => ({
      ns: ico.ns,
      name: ico.name,
      url: this.sani.bypassSecurityTrustResourceUrl(`/svg/lkups?ns=${ico.ns}&name=${ico.name}`)
    }));
  }

}
