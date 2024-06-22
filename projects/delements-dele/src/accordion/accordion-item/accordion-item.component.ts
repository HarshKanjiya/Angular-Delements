import { Component, ContentChild, input } from '@angular/core';
import { AccordionService } from '../accordion-service.service';
import { AccordionTriggerComponent } from './accordion-trigger/accordion-trigger.component';
import { AccordionBodyComponent } from './accordion-body/accordion-body.component';

@Component({
  selector: 'accordion-item',
  standalone: true,
  imports: [],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.css'
})
export class AccordionItemComponent {
  constructor(public State: AccordionService) { }
  @ContentChild(AccordionBodyComponent) content!: AccordionBodyComponent;
  @ContentChild(AccordionTriggerComponent) trigger!: AccordionTriggerComponent;

  value = input.required<string>()
  open = input<boolean>()

  ngAfterViewInit() {
    if (this.open()) this.State.currentTab.set(this.value())
    if (this.content) this.content.currIndex.set(this.value());
    if (this.trigger) this.trigger.currIndex.set(this.value());
  }
}
