import { Component, input, model } from '@angular/core';

@Component({
  selector: 'dele-Pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class DelePagination {
  getData = input<() => void>()
  initialLoad = input<boolean>(true)
  pageObject = model<any>()

  dataSource: any = {}

  onDropdownChange(event: any) {
    this.pageObject.update(() => ({ PageSize: this.dataSource.PageSize }))
  }
}
