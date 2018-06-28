import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { fade, xSlideFade, ySlideFade } from '../common/animations';
import { CbjComponent } from '../common/cbj-component/cbj-component.class';
import { MediaQueryService } from '../common/media-queries/media-query.service';

@Component({
  selector: 'cbj-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    xSlideFade('400ms ease-out', '75%', '-100%'),
    xSlideFade('400ms 3s ease-in', '100%', '-100%', '-card'),
    xSlideFade('400ms ease-out', '-100%', '100%', '-st'),
    fade('500ms 1.5s', 'ease-out'),
    ySlideFade('500ms 2s ease-in', '100%', '-100%'),
  ],
})
export class WelcomeComponent extends CbjComponent implements AfterViewInit, OnDestroy {
  /**
   * Current active panel id
   */
  public activePanel: number;

  /**
   * Object for each panel with property for moving progress bar
   */
  public panels = [
    { progress: 0 },
    { progress: 0 },
    { progress: 0 },
  ];
  /**
   * Subject for stopping the timers
   *
   * @type {Subject<void>}
   */
  private stopTimer = new Subject();

  constructor(public mQuery: MediaQueryService) {
    super(mQuery);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.activePanel = 0;
      this.startTimer();
    }, 350);
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.stopTimer.next();
    this.stopTimer.complete();
  }

  /**
   * Opens either the next panel or the one clicked
   *
   * @param {number} id
   */
  public nxtPanel(id?: number): void {
    const prev = this.activePanel;
    const nxt = id !== undefined ? id : this.activePanel + 1;

    this.stopTimer.next();

    this.activePanel = nxt >= this.panels.length ? 0 : nxt;
    this.panels[prev].progress = 0;

    this.startTimer();
  }

  /**
   * Returns if id is active
   *
   * @param {number} id
   * @returns {boolean}
   */
  public panelActive(id: number): boolean {
    return this.activePanel === id;
  }

  /**
   * Start the interval cycling the panels
   */
  private startTimer() {
    interval(150).pipe(
      take(100),
      takeUntil(this.stopTimer),
    ).subscribe(this.incrementBar, this.handleError, () => this.nxtPanel());
  }

  /**
   * Increments the progress bars
   */
  private incrementBar = (val) => {
    this.panels[this.activePanel].progress = val;
  }

  private handleError = (e) => {
    console.error(e);
  }
}
