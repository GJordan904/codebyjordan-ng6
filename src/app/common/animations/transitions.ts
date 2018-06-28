import {trigger, state, style, animate, transition, AnimationTriggerMetadata} from '@angular/animations';

export function fade(timing: string, easing: string): AnimationTriggerMetadata {
  return trigger('fade', [
    transition(':enter', [
      style({
        opacity: 0
      }),
      animate(timing + ' ' + easing)
    ]),
    transition(':leave', [
      animate(timing + ' ' + easing, style({
        opacity: 0
      }))
    ])
  ]);
}

export function collapse(timing: string, easing: string): AnimationTriggerMetadata {
  return trigger('collapse', [
    state('closed', style({height: 0, position: 'absolute'})),
    state('open', style({height: '*', position: 'absolute'})),
    transition('closed <=> open', animate(timing + ' ' + easing))
  ]);
}

export function zoom(timing: string, easing: string): AnimationTriggerMetadata {
  return trigger('zoom', [
    transition(':enter', [
      style({ transform: 'scale(0)' }),
      animate(timing + 'ms ' + easing)
    ]),
    transition(':leave', [
      animate(timing + ' ' + easing, style({
        transform: 'scale(1)'
      }))
    ])
  ]);
}

export function xSlideFade(timings: string, start: string, stop: string, id = ''): AnimationTriggerMetadata {
  return trigger(`xSlideFade${id}`, [
    transition(':enter', [
      style({ opacity: 0 }),
      style({ transform: `translateX(${start})` }),
      animate(timings)
    ]),
    transition(':leave', [
      animate(timings, style({
        opacity: 0,
        transform: `translateX(${stop})`
      }))
    ])
  ]);
}

export function ySlideFade(timings: string, start: string, stop: string, id = ''): AnimationTriggerMetadata {
  return trigger(`ySlideFade${id}`, [
    transition(':enter', [
      style({ opacity: 0 }),
      style({ transform: `translateY(${start})` }),
      animate(timings)
    ]),
    transition(':leave', [
      animate(timings, style({
        opacity: 0,
        transform: `translateY(${stop})`
      }))
    ])
  ]);
}

