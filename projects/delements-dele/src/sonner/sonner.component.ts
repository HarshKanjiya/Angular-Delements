import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { DeleButton } from '../button/button.component';

@Component({
  selector: 'Sonner',
  standalone: true,
  imports: [DeleButton],
  templateUrl: './sonner.component.html',
  styleUrl: './sonner.component.css',
  animations: [
    trigger('slideInOut', [
      state(
        'void',
        style({
          transform: 'translateY(50%)',
          opacity: 0,
        })
      ),
      transition(':enter', [
        animate(
          '300ms ease-in-out',
          style({
            transform: 'translateY(0)',
            opacity: 1,
          })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-in-out',
          style({
            transform: 'translateY(50%)',
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class DeleSonner {
  list: any[] = [];
  duration: number = 3000
  public addSonner(title: string, desc: string, duration: number = 3000, callBack: (item: any) => void) {
    this.duration = duration
    if (this.list.length > 3) this.list.splice(3);
    let temp = this.list.reverse();
    let timeId = setTimeout(() => {
      this.list = this.list.filter((x) => x.id != timeId);
    }, this.duration);
    temp.push({
      id: timeId,
      title: title,
      desc: desc,
      callBack: callBack,
      skewX: 100,
      skewY: 3,
    });
    this.list = temp.reverse();
    this.list = this.list.map((item: any, index: number) => {
      let bottom = (index + 2) * 20;
      let scale = 1 - index * 0.1;
      item.bottom = bottom;
      item.scale = scale;
      return item;
    });
    setTimeout(() => {
      this.list.map((item) => {
        if (item.id == timeId) item.skewX = 0;
        return item;
      });
    }, 1);
  }

  opaFunc(ind: any) {
    return ind > 2 ? 0 : 1;
  }

  hoverIn() {
    this.list = this.list.map((ele, index) => {
      clearTimeout(ele.id);
      ele.scale = 1;
      ele.bottom = ele.bottom + index * 60;
      ele.skewX = 100;
      ele.skewY = 0;
      return ele;
    });
  }
  hoverOut() {
    this.list = this.list.map((item: any, index: number) => {
      item.bottom = (index + 2) * 20;
      item.scale = 1 - index * 0.1;
      item.skewX = 0;
      item.skewY = 3;
      let timeId = setTimeout(() => {
        this.list = this.list.filter((x) => x.id != item.id);
      }, this.duration - index * 200);
      item.id = timeId;
      return item;
    });
  }

  undo(id: number) {
    this.list = this.list
      .filter((x) => {
        if (x.id == id) {
          x?.callBack({ title: x.title, desc: x.desc, undo: true });
          return false;
        }
        return true;
      })
      .map((item, ind) => {
        item.scale = 1;
        item.bottom = 40 + 80 * ind;
        return item;
      });
  }
}
