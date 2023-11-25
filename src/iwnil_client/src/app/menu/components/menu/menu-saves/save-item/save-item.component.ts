import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  deleteSaveAction,
  loadGameAction,
} from 'src/app/menu/store/actions/menu.action';
import { SaveInterface } from 'src/app/menu/types/save.interface.ts';

@Component({
  selector: 'iwnil-save-item',
  templateUrl: './save-item.component.html',
  styleUrls: ['./save-item.component.scss'],
})
export class SaveItemComponent {
  @Input('save') saveProps: SaveInterface;

  constructor(private store: Store, private router: Router) {}

  onDelete(): void {
    this.store.dispatch(deleteSaveAction({ id: this.saveProps.id }));
  }

  onLoad(): void {
    this.store.dispatch(loadGameAction({ save: this.saveProps }));
    this.router.navigateByUrl('game');
  }
}
