import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, Breakpoint } from './breakpoints';

@Injectable({
  providedIn: 'root',
  useClass: MediaQueryService,
  deps: [ BreakpointObserver ],
})
export class MediaQueryService {
  public breakpointState: Observable<BreakpointState[]>;

  constructor(private breakpoints: BreakpointObserver) {
    this.createObservers();
  }

  private createObservers() {
    const phoneObserver: Observable<BreakpointState> = this.breakpoints.observe(Breakpoints.PHONE)
      .pipe(map(state => ({point: Breakpoint.Phone, active: state.matches, mobile: true}) ));

    const tabletObserver: Observable<BreakpointState> = this.breakpoints.observe(Breakpoints.TABLET)
      .pipe(map(state => ({point: Breakpoint.Tablet, active: state.matches, mobile: true}) ));

    const standardObserver: Observable<BreakpointState> = this.breakpoints.observe(Breakpoints.STANDARD)
      .pipe(map(state => ({point: Breakpoint.Standard, active: state.matches, mobile: false}) ));

    const wideObserver: Observable<BreakpointState> = this.breakpoints.observe(Breakpoints.WIDE)
      .pipe(map(state => ({point: Breakpoint.Wide, active: state.matches, mobile: false}) ));

    const ultraWideObserver: Observable<BreakpointState> = this.breakpoints.observe(Breakpoints.ULTRA_WIDE)
      .pipe(map(state => ({point: Breakpoint.UltraWide, active: state.matches, mobile: false}) ));

    this.breakpointState = combineLatest<BreakpointState>
    ([phoneObserver, tabletObserver, standardObserver, wideObserver, ultraWideObserver])
        .pipe(map((states: BreakpointState[]) => states.filter(state => state.active) ));
  }
}
