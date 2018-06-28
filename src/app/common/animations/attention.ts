import { trigger, state, style, animate, transition, AnimationTriggerMetadata, keyframes } from '@angular/animations';

export function pulse(): AnimationTriggerMetadata {
  return trigger('pulse', [
    state('start', style({transform: 'scale(.1)', opacity: 0})),
    state('end', style({transform: 'scale(1.2)', opacity: 0})),
    transition('start<=>end', [
      animate(225, keyframes([
        style({transform: 'scale(.1)', opacity: 0, offset: 0}),
        style({transform: 'scale(1)', opacity: 1, offset: .5}),
        style({transform: 'scale(1.2)', opacity: 0, offset: 1})
      ]))
    ])
  ]);
}
