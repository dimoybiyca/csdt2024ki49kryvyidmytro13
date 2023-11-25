import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'iwnil-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent {
  @Input('mode') modeProps: string;
  @Output('btnClick') btnClick = new EventEmitter();

  onBtnClick() {
    this.btnClick.emit();
  }
}
