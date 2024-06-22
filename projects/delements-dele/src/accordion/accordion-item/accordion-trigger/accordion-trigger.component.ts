import { Component, signal } from '@angular/core';
import { AccordionService } from '../../accordion-service.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'accordion-trigger',
  standalone: true,
  imports: [],
  templateUrl: './accordion-trigger.component.html',
  styleUrl: './accordion-trigger.component.css',
  animations: [
    trigger('rotateArrow', [
      state('down', style({ transform: 'rotate(0deg)' })),
      state('up', style({ transform: 'rotate(180deg)' })),
      transition('down <=> up', animate('200ms ease-in-out')),
    ]),
  ],
})
export class AccordionTriggerComponent {
  constructor(public state: AccordionService) { }
  currIndex = signal("");
  onClickHandler() {
    if (this.state.currentTab() > -1) this.state.prevTab.set(this.state.currentTab());
    this.state.currentTab.set(this.state.currentTab() == this.currIndex() ? -2 : this.currIndex());
  }
}
