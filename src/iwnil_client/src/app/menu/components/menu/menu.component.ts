import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { newGameAction } from 'src/app/menu/store/actions/menu.action';

@Component({
  selector: 'iwnil-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(private store: Store) {}

  onNewClick(): void {
    this.store.dispatch(newGameAction());
  }

  onSaveClick(): void {}

  onLoadClick(): void {}
}
