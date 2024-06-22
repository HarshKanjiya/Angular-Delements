import { Component, input } from '@angular/core';

@Component({
  selector: 'dele-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  type = input<"classic" | "success" | "error" | "warning" | "custom">("classic")
}
