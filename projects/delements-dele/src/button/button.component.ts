import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'dele-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class DeleButton {
  click = input<() => any>(() => { })
  class = input<string>("")
  style = input<string>("")
  size = input<'sm' | 'md' | 'lg'>('md')
  loading = input<boolean>(false)
  disabled = input<boolean>(false)
  sizePadd = ""
  fontSize = "1rem"
  type = input<'classic' | 'light' | 'primary' | 'secondary'>('classic')
  ngOnInit() {
    if (this.size() == "sm") {
      this.sizePadd = "0.4rem 0.6rem"
      this.fontSize = "0.7rem"
    }
    else if (this.size() == "md") {
      this.sizePadd = "0.5rem 1rem"
      this.fontSize = "1rem"
    }
    else if (this.size() == "lg") {
      this.sizePadd = "0.6rem 1.1rem"
      this.fontSize = "1.2rem"
    }
  }
}
