import { Component, Signal, ViewChild, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccordionBodyComponent, AccordionComponent, AccordionItemComponent, AccordionTriggerComponent, AlertComponent, AlertDescriptionComponent, AlertTitleComponent } from '../../projects/delements-dele/src/public-api';
import { DeleSonner } from '../../projects/delements-dele/src/sonner/sonner.component';
import { AlertDialogComponent } from '../../projects/delements-dele/src/alert-dialog/alert-dialog.component';
import { DeleButton } from '../../projects/delements-dele/src/button/button.component';
import { DeleAvatar } from '../../projects/delements-dele/src/avatar/avatar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AccordionComponent,
    AccordionBodyComponent,
    AccordionItemComponent,
    AccordionTriggerComponent,
    DeleSonner,
    AlertComponent,
    AlertTitleComponent,
    AlertDescriptionComponent,
    AlertDialogComponent,
    DeleButton,
    DeleAvatar
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Delements';
  sonner: Signal<DeleSonner | undefined> = viewChild(DeleSonner)
  alertDialog: Signal<AlertDialogComponent | undefined> = viewChild(AlertDialogComponent)


  addSonner() {
    this.sonner()?.addSonner('title ' + this.temp, 'faltu ka text', 3000, this.onUndoSonner);
    this.temp++;
  }
  temp = 1;

  addAlertDialog() {
    this.alertDialog()?.openDialog("Are you Sure?", "", "Yes", "Cancel", this.onConfirmation)
  }

  onConfirmation(res: boolean) {
    console.log(res);
  }

  onUndoSonner(item: any) {
    console.log('Undone item: ', item);
  }
}