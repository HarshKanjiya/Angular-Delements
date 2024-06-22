import { Component, input } from '@angular/core';

@Component({
  selector: 'Avatar',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css'
})
export class DeleAvatar {
  alt = input<string>("")
  src = input<string>("")
  style = input<string>("")
  dClass = input<string>("")
  lazyLoad = input<boolean>(true)
}
