import { Component, signal } from '@angular/core';
import { AccordionService } from '../../accordion-service.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'accordion-body',
  standalone: true,
  imports: [],
  templateUrl: './accordion-body.component.html',
  styleUrl: './accordion-body.component.css',
  animations: [
    trigger('contentAnimation', [
      state('open', style({ height: '*' })),
      state('closed', style({ height: '0px' })),
      transition('closed <=> open', [animate('250ms ease-in-out')]),
    ]),
  ],
})
export class AccordionBodyComponent {
  currIndex = signal('');

  constructor(public state: AccordionService) {}
}
