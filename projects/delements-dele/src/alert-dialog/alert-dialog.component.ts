import { Component, signal } from '@angular/core';
import { DeleButton } from '../button/button.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'dele-alert-dialog',
  standalone: true,
  imports: [DeleButton],
  templateUrl: './alert-dialog.component.html',
  styleUrl: './alert-dialog.component.css',
  animations: [
    trigger('slideInOut', [
      state(
        'void',
        style({
          transform: 'translateY(2%)',
          opacity: 0,
        })
      ),
      transition(':enter', [
        animate(
          '250ms ease-in-out',
          style({
            transform: 'translateY(0)',
            opacity: 1,
          })
        ),
      ]),
      transition(':leave', [
        animate(
          '250ms ease-in-out',
          style({
            transform: 'translateY(2%)',
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class AlertDialogComponent {
  show = signal<boolean>(false)
  message: string = ""
  desc: string = ""
  positiveBtnTxt: string = ""
  nagetiveBtnTxt: string = ""
  callBack: any
  openDialog(message: string = "", desc?: string, positiveButtonText: string = "Continue", nagetiveButtontext: string = "Cancel", callBack?: (confirmation: boolean) => void) {
    this.message = message
    if (desc) this.desc = desc
    this.positiveBtnTxt = positiveButtonText
    this.nagetiveBtnTxt = nagetiveButtontext
    if (callBack) this.callBack = callBack
    this.show.set(true)
    document.body.style.overflow = "hidden"
    document.body.style.paddingRight = "17px"
  }
  closeDialog(val = false) {
    this.show.set(false)
    this.callBack(val)
    document.body.style.overflow = "auto"
    document.body.style.paddingRight = "0"
  }

  submit() {
    this.closeDialog(true)
  }
}